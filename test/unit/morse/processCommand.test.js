import { writeFile } from 'fs/promises';
import { convertTextToObfuscatedMorseCode } from '../../../src/morse/obfuscate';
import { processMorseCommand } from '../../../src/morse/processCommand';

jest.mock('../../../src/morse/obfuscate', () => {
  return {
    convertTextToObfuscatedMorseCode: jest.fn(() => 'TEST_OUTPUT'),
  };
});

jest.mock('fs/promises', () => {
  return {
    readFile: () => 'ABC\r\nDEF',
    writeFile: jest.fn(),
  };
});

describe('processMorseCommand', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call the convertTextToObfuscatedMorseCode function once when called with the --input option', async () => {
    const output = await processMorseCommand({
      input: 'HELLO',
    });

    expect(convertTextToObfuscatedMorseCode).toHaveBeenCalledTimes(1);
    expect(convertTextToObfuscatedMorseCode).toHaveBeenCalledWith('HELLO');
    expect(output).toBe('TEST_OUTPUT');
  });

  it('should call the convertTextToObfuscatedMorseCode function twice when processing a file with 2 lines', async () => {
    const output = await processMorseCommand({
      inputFile: './fake_input_file',
      outputFile: './fake_output_file',
    });

    expect(writeFile).toHaveBeenCalledTimes(1);
    expect(convertTextToObfuscatedMorseCode).toHaveBeenCalledTimes(2);
    expect(convertTextToObfuscatedMorseCode).toHaveBeenNthCalledWith(1, 'ABC');
    expect(convertTextToObfuscatedMorseCode).toHaveBeenNthCalledWith(2, 'DEF');
    expect(output).toBe('Obfuscated morse code written to ./fake_output_file');
  });
});