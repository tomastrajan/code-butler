import Listr from 'listr';

import { getContext } from '@services/context';
import { checkoutMaster, clone, pull, resetHead } from '@services/git';

export const GitInitTask = {
  title: 'Git init',
  task: () =>
    new Listr([GitCloneTask, GitPullTask, GitCheckoutMaster, GitResetHead])
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
        getContext(ctx).git.exists = true;
        task.skip(`The git repository for "${name}" already exists...`);
      } else {
        throw error;
      }
    }
  }
};

const GitPullTask = {
  title: 'Git pull',
  enabled: ctx => getContext(ctx).git.exists === true,
  task: async ctx => {
    const { workspace } = ctx.config.general;
    const { repoUrl } = ctx.project;
    await pull(repoUrl, workspace);
  }
};

const GitCheckoutMaster = {
  title: 'Git Checkout Master',
  enabled: ctx => getContext(ctx).git.exists === true,
  task: async ctx => {
    const { workspace } = ctx.config.general;
    const { repoUrl } = ctx.project;
    await checkoutMaster(repoUrl, workspace);
  }
};

const GitResetHead = {
  title: 'Git reset head',
  enabled: ctx => getContext(ctx).git.exists === true,
  task: async ctx => {
    const { workspace } = ctx.config.general;
    const { repoUrl } = ctx.project;
    await resetHead(repoUrl, workspace);
  }
};
