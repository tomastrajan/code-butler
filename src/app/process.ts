import Listr from 'listr';

import { GitInitTask } from '@tasks/git';
import { WorkspaceTask } from '@tasks/workspace';
import { InitTask } from '@tasks/init';
import { FinishTask } from '@tasks/finish';
import { DiffTask } from '@tasks/diff';
import { ConfirmTask } from '@tasks/confirm';
import { TransformTask } from '@tasks/transform';

export const createProcess = () =>
  new Listr(
    [
      InitTask,
      WorkspaceTask,
      GitInitTask,
      TransformTask,
      DiffTask,
      ConfirmTask,
      // CommitAndPushTask
      // OpenPrTask

      FinishTask
    ],
    {
      collapse: true
    } as any
  );
