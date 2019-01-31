import { ensureDir } from '@services/fs';

export const WorkspaceTask = {
  title: 'Workspace',
  task: async (ctx) => {
    const { workspace } = ctx.config.general;
    await ensureDir(workspace);
  }
};
