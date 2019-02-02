/* tslint:disable:no-console */
import figlet from 'figlet';
import { Signale } from 'signale';

export const intro = () =>
  console.log(
    figlet.textSync('Code Butler', {
      font: 'ogre',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    })
  );

export const createLogger = (context: string) => {
  return new Signale({ scope: context });
};

export const separator = (lines: number = 1) =>
  Array(lines)
    .fill(1)
    .forEach(() => console.log());
