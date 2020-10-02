import { convertTextToMorseCode } from '../../../src/morse/morse';
import { convertTextToObfuscatedMorseCode } from '../../../src/morse/obfuscate';

describe('Morse conversion functions', () => {
  describe('convertTextToMorseCode', () => {
    it('should convert text "I AM IN TROUBLE" to morse code', () => {
      const inputText = 'I AM IN TROUBLE';
      const expectedOutput = '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.';

      const output = convertTextToMorseCode(inputText);

      expect(output).toEqual(expectedOutput);
    });

    it('should convert text "HELLO" to morse code', () => {
      const inputText = 'HELLO';
      const expectedOutput = '....|.|.-..|.-..|---';

      const output = convertTextToMorseCode(inputText);

      expect(output).toEqual(expectedOutput);
    });

    it('should convert text with punctuation "A,BC,D." to morse code', () => {
      const inputText = 'A,BC,D.';
      const expectedOutput = '.---..---...|-.-.--..---...-.-.-';

      const output = convertTextToMorseCode(inputText);

      expect(output).toEqual(expectedOutput);
    });
  });

  describe('convertTextToObfuscatedMorseCode', () => {
    it('should convert text "HELLO" to obfuscated morse code', () => {
      const inputText = 'HELLO';
      const expectedOutput = '4|1|1A2|1A2|C';

      const output = convertTextToObfuscatedMorseCode(inputText);

      expect(output).toEqual(expectedOutput);
    });

    it('should convert text "I AM IN TROUBLE" to obfuscated morse code', () => {
      const inputText = 'I AM IN TROUBLE';
      const expectedOutput = '2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1';

      const output = convertTextToObfuscatedMorseCode(inputText);

      expect(output).toEqual(expectedOutput);
    });
  });
});
