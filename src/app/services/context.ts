export interface Context {
  git: GitContext;
  diff: DiffContext;
  confirm: ConfirmContext;
}

export interface GitContext {
  exists: boolean;
}

export interface DiffContext {
  isDiff: boolean;
}

export interface ConfirmContext {
  accept: boolean;
}

export const createProcessContext = (): Context => ({
  git: {
    exists: false
  },
  diff: {
    isDiff: false
  },
  confirm: {
    accept: false
  }
});

export const getContext = (ctx: any): Context => ctx.process;
