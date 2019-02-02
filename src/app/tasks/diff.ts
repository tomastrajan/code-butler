import { tmpdir } from 'os';
import { resolve } from 'path';

import { createHtmlDiff, createHtmlDiffTemplate } from '@services/diff';

export const DiffTask = {
  title: 'Diff',
  task: async (ctx, task) => {
    const { repoUrl, name } = ctx.project;
    const { workspace } = ctx.config.general;
    const htmlDiff = await createHtmlDiff(repoUrl, workspace);
    const diffTemplate = createHtmlDiffTemplate(name, htmlDiff);

    const diffFile = resolve(tmpdir(), `code-butler-${name}.html`);
    utils.writeFile(diffFile, diffTemplate);
    open(filePath);

  }
};
