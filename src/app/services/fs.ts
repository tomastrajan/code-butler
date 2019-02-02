/* tslint:disable:import-blacklist */
import {
  ensureDir as ensureDirFs,
  writeFile as writeFileFs,
  writeJSON,
  WriteOptions
} from 'fs-extra';

export const ensureDir = (targetPath: string) => ensureDirFs(targetPath);

export const writeJson = (
  targetPath: string,
  data: any,
  options?: WriteOptions
) => writeJSON(targetPath, data, options);

export const writeFile = (
  targetPath: string,
  data: any,
  options?: WriteOptions
) => writeFileFs(targetPath, data, options);
