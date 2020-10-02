import * as parseArgs from 'minimist';
import { processMorseCommand, printCommandOutput } from './morse/processCommand';

(async () => {
  const output = await processMorseCommand(parseArgs(process.argv.slice(2)));

  printCommandOutput(output);
})();
