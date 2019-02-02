import { resolve } from 'path';
import { writeJSON } from 'fs-extra';

import { createHtmlDiff } from '@services/diff';

const TEST_FILE = resolve('./test', 'some-file.json');

beforeEach(async () => {
  await writeJSON(TEST_FILE, { prop: 'changed-value' }, { spaces: 2 });
});

afterEach(async () => {
  await writeJSON(TEST_FILE, { prop: 'value' }, { spaces: 2 });
});

test('creates a file diff', async () => {
  const res = await createHtmlDiff('anything/test.git', '.', 'name');
  expect(res).toMatch(/test\/some-file.json/);
});
