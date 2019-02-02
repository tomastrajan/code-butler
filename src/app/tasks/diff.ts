import open from 'open';
import { tmpdir } from 'os';
import { resolve } from 'path';

import { writeFile } from '@services/fs';
import { getContext } from '@services/context';
import { escapeProjectName } from '@services/util';
import { createHtmlDiff, createHtmlDiffTemplate } from '@services/diff';

export const DiffTask = {
  title: 'Diff',
  task: async (ctx, task) => {
    const { repoUrl, name } = ctx.project;
    const { workspace } = ctx.config.general;
    const htmlDiff = await createHtmlDiff(repoUrl, workspace);
    if (htmlDiff === '') {
      task.skip(`No changes found...`);
    } else {
      getContext(ctx).diff.isDiff = true;
      const diffFileContent = createHtmlDiffTemplate(name, htmlDiff);
      const diffFilePath = resolve(
        tmpdir(),
        `code-butler-${escapeProjectName(name)}.html`
      );
      await writeFile(diffFilePath, diffFileContent);
      open(diffFilePath);
    }
  }
};
