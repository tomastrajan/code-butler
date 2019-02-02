import { resolve } from 'path';

import { writeJson } from '@services/fs';
import { createHtmlDiff } from '@services/diff';

const TEST_FILE = resolve('./test', 'some-file.json');

afterEach(async () => {
  await writeJson(TEST_FILE, { prop: 'value' }, { spaces: 2 });
});

test('creates a html diff', async () => {
  await writeJson(TEST_FILE, { prop: 'changed-value' }, { spaces: 2 });
  const res = await createHtmlDiff('anything/test.git', '.');
  expect(res).toMatch(/test\/some-file.json/);
});

test('returns empty string if no diff', async () => {
  const res = await createHtmlDiff('anything/test.git', '.');
  expect(res).toBe('');
});
