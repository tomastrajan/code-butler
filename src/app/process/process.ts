import Listr from 'listr';
import ListrUpdateRenderer from 'listr-update-renderer';

import { WithStreamTask, GitTask } from '@app/tasks';

export const process = new Listr(
  [
    GitTask,
    WithStreamTask
  ],
  {
    renderer: ListrUpdateRenderer,
    collapse: false
  } as any
);
