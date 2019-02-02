import { createHtmlDiff } from '@services/diff';

test('creates a file diff', async () => {
  const res = await createHtmlDiff('anything/test.git', '.', 'name');
  expect(res).toMatch(/test\/some-file.json/);
});