import input from 'listr-input';

export const ConfirmTask = {
  title: 'Confirm changes',
  task: (ctx, task) => {
    addTaskSpecificProgressContext(ctx);

    return input('Do you accept the proposed changes? [yes,no]', {
      secret: false,
      validate: value => ['yes', 'no'].includes(value),
      done: result => {
        if (result === 'yes') {
          getContext(ctx).accept = true;
          task.title = `Confirm changes -> Accepted`;
        } else {
          task.title = `Confirm changes -> Rejected`;
        }
      }
    });
  }
};

const getContext = ctx => ctx.progress.confirm as ConfirmTaskContext;

const addTaskSpecificProgressContext = ctx => {
  ctx.progress.confirm = {
    accept: false
  };
};

interface ConfirmTaskContext {
  accept: boolean;
}
