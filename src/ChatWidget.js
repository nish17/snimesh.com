import React, { useState, useEffect, useRef } from 'react';

const MAX_MESSAGE_LENGTH = 1000;
const CHAR_WARNING_THRESHOLD = MAX_MESSAGE_LENGTH - 200;
// UX-only mirror of the server's rate-limit window (see netlify/functions/chat.mjs
// config.rateLimit) -- not itself an enforcement mechanism. The two can drift
// out of sync; a live 429 response re-syncs this counter (see send()).
const FRONTEND_MESSAGE_CAP = 10;
const GREETING_TEXT = "Ask me about Nimesh's experience, projects, or skills.";
const CONTACT_EMAIL = 'nimesh3536@gmail.com';

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadCapState() {
  try {
    const raw = localStorage.getItem('chatWidgetCap');
    if (!raw) return { count: 0, date: todayKey() };
    const parsed = JSON.parse(raw);
    if (parsed.date !== todayKey()) return { count: 0, date: todayKey() };
    return parsed;
  } catch {
    return { count: 0, date: todayKey() };
  }
}

function saveCapState(state) {
  localStorage.setItem('chatWidgetCap', JSON.stringify(state));
}

const ChatWidget = () => {
  const [open, setOpen] = useState(() => localStorage.getItem('chatWidgetOpen') === 'true');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [capState, setCapState] = useState(loadCapState);
  const [sessionId] = useState(() => crypto.randomUUID());
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('chatWidgetOpen', open ? 'true' : 'false');

    if (open) {
      const alreadyGreeted = localStorage.getItem('chatWidgetGreeted') === 'true';
      if (!alreadyGreeted) {
        setMessages((prev) => [...prev, { role: 'assistant', text: GREETING_TEXT, grounded: true }]);
        localStorage.setItem('chatWidgetGreeted', 'true');
      }
      if (inputRef.current) inputRef.current.focus();
    }
  }, [open]);

  const capReached = capState.count >= FRONTEND_MESSAGE_CAP;

  const send = async () => {
    const trimmed = input.trim();
    if (!trimmed || capReached || loading) return;

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, sessionId }),
      });

      if (res.status === 429) {
        const capped = { count: FRONTEND_MESSAGE_CAP, date: todayKey() };
        setCapState(capped);
        saveCapState(capped);
        setInput(trimmed);
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: "You've reached the message limit for now. Feel free to email Nimesh directly.",
            grounded: false,
            rateLimited: true,
          },
        ]);
        return;
      }

      if (!res.ok) {
        throw new Error(`request failed with status ${res.status}`);
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: data.reply, grounded: data.grounded, error: data.error },
      ]);

      const nextCap = { count: capState.count + 1, date: todayKey() };
      setCapState(nextCap);
      saveCapState(nextCap);
    } catch {
      setInput(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: "Sorry, that didn't go through. Please try again, or email Nimesh directly.",
          grounded: false,
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      send();
    }
  };

  const remainingChars = MAX_MESSAGE_LENGTH - input.length;
  const showCharWarning = input.length > CHAR_WARNING_THRESHOLD;
  const showEmptyTranscriptCapNote = messages.length === 0 && capState.count > 0;

  return (
    <div className='chat-widget'>
      {open && (
        <div className='chat-widget-panel' role='dialog' aria-label='Chat with an assistant about Nimesh'>
          <div className='chat-widget-header'>
            <span>Ask about Nimesh</span>
            <button
              type='button'
              className='chat-widget-close'
              aria-label='Close chat'
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
          </div>

          <div className='chat-widget-messages' aria-live='polite' role='log'>
            {showEmptyTranscriptCapNote && (
              <div className='chat-widget-note'>
                You've sent {capState.count} message{capState.count === 1 ? '' : 's'} today.
              </div>
            )}
            {messages.map((message, index) => {
              const isRefusal =
                message.role === 'assistant' &&
                message.grounded === false &&
                message.error !== 'provider' &&
                !message.isError &&
                !message.rateLimited;
              return (
                <div
                  key={index}
                  className={[
                    'chat-widget-bubble',
                    message.role === 'user' ? 'chat-widget-bubble--user' : 'chat-widget-bubble--assistant',
                    isRefusal ? 'chat-widget-bubble--refusal' : '',
                  ].filter(Boolean).join(' ')}
                >
                  <p>{message.text}</p>
                  {isRefusal && (
                    <a href={`mailto:${CONTACT_EMAIL}`} className='chat-widget-contact-link'>
                      Email Nimesh
                    </a>
                  )}
                </div>
              );
            })}
            {loading && (
              <div className='chat-widget-bubble chat-widget-bubble--assistant'>
                <p>Thinking...</p>
              </div>
            )}
          </div>

          <div className='chat-widget-input-row'>
            {capReached ? (
              <div className='chat-widget-note'>
                You've reached today's message limit. Feel free to{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>email Nimesh directly</a>.
              </div>
            ) : (
              <>
                <input
                  ref={inputRef}
                  type='text'
                  className='chat-widget-input'
                  value={input}
                  maxLength={MAX_MESSAGE_LENGTH}
                  placeholder='Ask a question...'
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                  aria-label='Type your question'
                />
                <button
                  type='button'
                  className='chat-widget-send'
                  onClick={send}
                  disabled={loading || !input.trim()}
                >
                  Send
                </button>
              </>
            )}
          </div>
          {showCharWarning && !capReached && (
            <div className='chat-widget-char-count'>{remainingChars} characters left</div>
          )}
        </div>
      )}

      <button
        type='button'
        className='chat-widget-toggle'
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? 'Close' : 'Chat'}
      </button>
    </div>
  );
};

export default ChatWidget;
