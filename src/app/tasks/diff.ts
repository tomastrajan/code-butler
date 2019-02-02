import { createHtmlDiff } from '@services/diff';

export const DiffTask = {
  title: 'Diff',
  task: async (ctx, task) => {
    const { repoUrl, name } = ctx.project;
    const { workspace } = ctx.config.general;
    const result = await createHtmlDiff(repoUrl, '.', name);
    task.skip(`Tralala "${JSON.stringify(result)}", ${typeof result}`);
  }
};
