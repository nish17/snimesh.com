import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import handler, { tokenize, scoreChunk, retrieveChunks, buildSystemPrompt } from './chat.mjs';

const ALLOWED_ORIGIN = 'https://www.snimesh.com';

function makeRequest(message, { origin = ALLOWED_ORIGIN, method = 'POST', rawBody } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (origin) headers.Origin = origin;
  return new Request('http://localhost/api/chat', {
    method,
    headers,
    body: rawBody !== undefined ? rawBody : JSON.stringify({ message }),
  });
}

function groqSuccessResponse(content) {
  return new Response(
    JSON.stringify({ choices: [{ message: { content } }] }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}

let originalFetch;
let originalGroqKey;
let originalOpenRouterKey;

beforeEach(() => {
  originalFetch = globalThis.fetch;
  originalGroqKey = process.env.GROQ_API_KEY;
  originalOpenRouterKey = process.env.OPENROUTER_API_KEY;
  process.env.GROQ_API_KEY = 'test-groq-key';
  process.env.OPENROUTER_API_KEY = 'test-openrouter-key';
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  process.env.GROQ_API_KEY = originalGroqKey;
  process.env.OPENROUTER_API_KEY = originalOpenRouterKey;
});

// --- Unit tests for pure retrieval helpers ---

test('tokenize lowercases, strips punctuation, and drops very short tokens', () => {
  assert.deepEqual(tokenize('Node.js is a great tool!'), ['node', 'great', 'tool']);
});

test('scoreChunk counts distinct overlapping tokens', () => {
  const score = scoreChunk(['nova', 'benefits', 'notification'], ['nova', 'benefits', 'engine']);
  assert.equal(score, 2);
});

test('retrieveChunks sorts facts by score descending', () => {
  const facts = [
    { id: 'a', text: 'irrelevant', tokens: ['irrelevant'] },
    { id: 'b', text: 'nova benefits notification engine', tokens: ['nova', 'benefits', 'notification', 'engine'] },
  ];
  const top = retrieveChunks('nova benefits notification', facts, 2);
  assert.equal(top[0].id, 'b');
  assert.ok(top[0].score > top[1].score);
});

test('buildSystemPrompt embeds chunk text and grounding/third-person instructions', () => {
  const prompt = buildSystemPrompt([{ id: 'x', text: 'Nimesh built X.' }]);
  assert.match(prompt, /third person/i);
  assert.match(prompt, /Nimesh built X\./);
});

// --- Integration tests for the handler ---

test('happy path: a well-matched question returns a grounded reply from Groq', async () => {
  let capturedRequest;
  globalThis.fetch = async (url, options) => {
    capturedRequest = { url, body: JSON.parse(options.body) };
    return groqSuccessResponse('He built the PDPU Scheduler using Google Assistant.');
  };

  const req = makeRequest('Tell me about the PDPU Scheduler project and Google Assistant.');
  const res = await handler(req);
  const data = await res.json();

  assert.equal(res.status, 200);
  assert.equal(data.grounded, true);
  assert.equal(data.reply, 'He built the PDPU Scheduler using Google Assistant.');
  assert.equal(capturedRequest.url, 'https://api.groq.com/openai/v1/chat/completions');
  assert.equal(capturedRequest.body.model, 'llama-3.3-70b-versatile');
  assert.match(capturedRequest.body.messages[0].content, /third person/i);
});

test('happy path: an unrelated question scores below threshold and returns the static refusal with no provider call', async () => {
  let fetchCalled = false;
  globalThis.fetch = async () => {
    fetchCalled = true;
    throw new Error('fetch should not have been called');
  };

  const req = makeRequest('Can you recommend a good pizza restaurant nearby?');
  const res = await handler(req);
  const data = await res.json();

  assert.equal(res.status, 200);
  assert.equal(data.grounded, false);
  assert.match(data.reply, /don't have that info/i);
  assert.equal(fetchCalled, false);
});

test('edge case: empty message returns 400 with no scoring or provider call', async () => {
  let fetchCalled = false;
  globalThis.fetch = async () => {
    fetchCalled = true;
  };

  const req = makeRequest('   ');
  const res = await handler(req);

  assert.equal(res.status, 400);
  assert.equal(fetchCalled, false);
});

test('edge case: a message exceeding the length limit returns 400 with no provider call', async () => {
  let fetchCalled = false;
  globalThis.fetch = async () => {
    fetchCalled = true;
  };

  const req = makeRequest('a'.repeat(1001));
  const res = await handler(req);

  assert.equal(res.status, 400);
  assert.equal(fetchCalled, false);
});

test('error path: Groq failure falls back to OpenRouter with the same request shape', async () => {
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push(url);
    if (url.includes('groq.com')) {
      return new Response('server error', { status: 500 });
    }
    return groqSuccessResponse('Fallback reply from OpenRouter.');
  };

  const req = makeRequest('Tell me about the PDPU Scheduler project and Google Assistant.');
  const res = await handler(req);
  const data = await res.json();

  assert.equal(res.status, 200);
  assert.equal(data.grounded, true);
  assert.equal(data.reply, 'Fallback reply from OpenRouter.');
  assert.equal(calls.length, 2);
  assert.match(calls[0], /groq\.com/);
  assert.match(calls[1], /openrouter\.ai/);
});

test('error path: both providers failing returns a graceful reply, not an unhandled exception', async () => {
  globalThis.fetch = async () => new Response('server error', { status: 500 });

  const req = makeRequest('Tell me about the PDPU Scheduler project and Google Assistant.');
  const res = await handler(req);
  const data = await res.json();

  assert.equal(res.status, 200);
  assert.equal(data.grounded, false);
  assert.match(data.reply, /trouble answering/i);
});

test('error path: a request with a mismatched Origin header is rejected before any scoring or provider call', async () => {
  let fetchCalled = false;
  globalThis.fetch = async () => {
    fetchCalled = true;
  };

  const req = makeRequest('Tell me about the PDPU Scheduler project.', { origin: 'https://evil.example.com' });
  const res = await handler(req);

  assert.equal(res.status, 403);
  assert.equal(fetchCalled, false);
});
