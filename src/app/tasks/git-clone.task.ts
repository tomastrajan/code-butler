import Listr from 'listr';

import { clone, pull, checkoutMaster, resetHead } from '@app/services';

export const GitTask = {
  title: 'Git',
  task: ctx => {
    createDefaultGitContext(ctx);
    return new Listr([
      GitCloneTask,
      GitPullTask,
      GitCheckoutMaster,
      GitResetHead
    ]);
  }
};

const GitCloneTask = {
  title: 'Git clone',
  task: async (ctx, task) => {
    const { workspace } = ctx.config.general;
    const { repoUrl, name } = ctx.config.project;
    try {
      await clone(repoUrl, workspace);
    } catch (error) {
      if (error.toString().includes('already exists')) {
        getGitContext(ctx).exists = true;
        task.skip(`The git repository for "${name}" already exists...`);
      }
    }
  }
};

const GitPullTask = {
  title: 'Git pull',
  skip: ctx => getGitContext(ctx).exists === false,
  task: async ctx => {
    const { workspace } = ctx.config.general;
    const { repoUrl } = ctx.config.project;
    await pull(repoUrl, workspace);
  }
};

const GitCheckoutMaster = {
  title: 'Git Checkout Master',
  skip: ctx => getGitContext(ctx).exists === false,
  task: async ctx => {
    const { workspace } = ctx.config.general;
    const { repoUrl } = ctx.config.project;
    await checkoutMaster(repoUrl, workspace);
  }
};

const GitResetHead = {
  title: 'Git reset head',
  skip: ctx => getGitContext(ctx).exists === false,
  task: async ctx => {
    const { workspace } = ctx.config.general;
    const { repoUrl } = ctx.config.project;
    await resetHead(repoUrl, workspace);
  }
};

const getGitContext = ctx => <GitCloneTaskContext>ctx.progress.git;
const createDefaultGitContext = ctx => {
  ctx.progress.git = {
    exists: false
  };
};

interface GitCloneTaskContext {
  exists: boolean;
}
