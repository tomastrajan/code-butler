import Listr from 'listr';

import { checkoutMaster, clone, pull, resetHead } from '@services/git';

export const GitTask = {
  title: 'Git',
  task: ctx => {
    createGitProgressContext(ctx);
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
    const { repoUrl, name } = ctx.project;
    try {
      await clone(repoUrl, workspace);
    } catch (error) {
      if (error.toString().includes('already exists')) {
        getGitContext(ctx).exists = true;
        task.skip(`The git repository for "${name}" already exists...`);
      } else {
        throw error;
      }
    }
  }
};

const GitPullTask = {
  title: 'Git pull',
  skip: ctx => getGitContext(ctx).exists === false,
  task: async ctx => {
    const { workspace } = ctx.config.general;
    const { repoUrl } = ctx.project;
    await pull(repoUrl, workspace);
  }
};

const GitCheckoutMaster = {
  title: 'Git Checkout Master',
  skip: ctx => getGitContext(ctx).exists === false,
  task: async ctx => {
    const { workspace } = ctx.config.general;
    const { repoUrl } = ctx.project;
    await checkoutMaster(repoUrl, workspace);
  }
};

const GitResetHead = {
  title: 'Git reset head',
  skip: ctx => getGitContext(ctx).exists === false,
  task: async ctx => {
    const { workspace } = ctx.config.general;
    const { repoUrl } = ctx.project;
    await resetHead(repoUrl, workspace);
  }
};

const getGitContext = ctx => <GitCloneTaskContext>ctx.progress.git;
const createGitProgressContext = ctx => {
  ctx.progress.git = {
    exists: false
  };
};

interface GitCloneTaskContext {
  exists: boolean;
}
