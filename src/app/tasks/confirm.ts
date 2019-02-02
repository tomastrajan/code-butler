import input from 'listr-input';

import { getContext } from '@services/context';

export const ConfirmTask = {
  title: 'Confirm changes',
  enabled: ctx => getContext(ctx).diff.isDiff === true,
  task: (ctx, task) =>
    input('Do you accept the proposed changes? [yes,no]', {
      secret: false,
      validate: value => ['yes', 'no'].includes(value),
      done: result => {
        if (result === 'yes') {
          getContext(ctx).confirm.accept = true;
          task.title = `Confirm changes -> Accepted`;
        } else {
          task.title = `Confirm changes -> Rejected`;
        }
      }
    })
};
