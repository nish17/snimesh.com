import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const facts = JSON.parse(readFileSync(join(__dirname, 'facts.json'), 'utf-8'));

test('facts.json parses as valid JSON and every entry has a non-empty id and text', () => {
  assert.ok(Array.isArray(facts), 'facts.json must be an array');
  assert.ok(facts.length > 0, 'facts.json must not be empty');
  for (const fact of facts) {
    assert.equal(typeof fact.id, 'string');
    assert.ok(fact.id.trim().length > 0, `fact has empty id: ${JSON.stringify(fact)}`);
    assert.equal(typeof fact.text, 'string');
    assert.ok(fact.text.trim().length > 0, `fact ${fact.id} has empty text`);
  }
});

test('no two entries share the same id', () => {
  const ids = facts.map((fact) => fact.id);
  const uniqueIds = new Set(ids);
  assert.equal(uniqueIds.size, ids.length, 'duplicate id found in facts.json');
});
