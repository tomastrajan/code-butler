import { ensureDir as ensureDirFs } from 'fs-extra';

export const ensureDir = (targetPath: string) => ensureDirFs(targetPath);