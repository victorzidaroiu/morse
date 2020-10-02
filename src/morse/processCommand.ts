import * as os from 'os';
import { readFile, writeFile } from 'fs/promises';
import { convertTextToObfuscatedMorseCode } from './obfuscate';

export const processMorseCommand = async (argv: any) => {
  if (argv.input && typeof argv.input === 'string') {
    return convertTextToObfuscatedMorseCode(argv.input);
  }

  if (argv.inputFile && argv.outputFile) {
    try {
      const fileData = await readFile(argv.inputFile, 'utf8');

      try {
        const inputLines = fileData.split(/[\r\n]+/);
        const outputLines = inputLines.map((line) => convertTextToObfuscatedMorseCode(line));
        const outputFile = outputLines.join(os.EOL);

        await writeFile(argv.outputFile, outputFile);
        return `Obfuscated morse code written to ${argv.outputFile}`;
      } catch (e) {
        return 'There was an error writing to the output file path. Please make sure you provided the correct path.';
      }
    } catch (e) {
      return 'There was an error reading the input file path. Please make sure you provided the correct path.';
    }
  }

  return 'Invalid options provided. You must provide wither --input or --inputFile and --outputFile.';
};

export const printCommandOutput = (output: string) => {
  if (output) {
    console.info(output);
  }
};
