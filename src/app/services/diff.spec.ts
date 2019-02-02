import { resolve } from 'path';

import { writeJson } from '@services/fs';
import { createHtmlDiff } from '@services/diff';

const TEST_FILE = resolve('./test', 'some-file.json');

beforeEach(async () => {
  await writeJson(TEST_FILE, { prop: 'changed-value' }, { spaces: 2 });
});

afterEach(async () => {
  await writeJson(TEST_FILE, { prop: 'value' }, { spaces: 2 });
});

test('creates a file diff', async () => {
  const res = await createHtmlDiff('anything/test.git', '.');
  expect(res).toMatch(/test\/some-file.json/);
});
