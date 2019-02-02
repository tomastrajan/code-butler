import Listr from 'listr';

import { GitInitTask } from '@tasks/git';
import { WorkspaceTask } from '@tasks/workspace';
import { InitTask } from '@tasks/init';
import { FinishTask } from '@tasks/finish';
import { DiffTask } from '@tasks/diff';
import { ConfirmTask } from '@tasks/confirm';

export const createProcess = () => new Listr(
  [
    InitTask,
    WorkspaceTask,
    GitInitTask,

    DiffTask,
    ConfirmTask,
    // User tasks
    // Confirm task
    // CommitAndPushTask
    // OpenPrTask

    FinishTask

  ],
  {
    collapse: false
  } as any
);
