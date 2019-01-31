import Listr from 'listr';

import { GitTask } from '@tasks/git';
import { WorkspaceTask } from '@tasks/workspace';
import { StreamExampleTask } from '@tasks/stream-example';
import { InitTask } from '@tasks/init';
import { FinishTask } from '@tasks/finish';

export const createProcess = () => new Listr(
  [
    InitTask,
    WorkspaceTask,
    GitTask,
    StreamExampleTask,
    FinishTask
  ],
  {
    collapse: false
  } as any
);
