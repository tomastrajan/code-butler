export interface ProcessContext {
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

export const createProcessContext = (): ProcessContext => ({
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

export const getProcessContext = (ctx: any): ProcessContext => ctx.process;
