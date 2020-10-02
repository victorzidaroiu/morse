import { alphabetCountLetter, isCharacterDotOrComma } from '../../src/util';

describe('Utility functions', () => {
  describe('alphabetCountLetter', () => {
    it('should convert the number 3 to C', () => {
      const input = 3;
      const expectedOutput = 'C';

      const output = alphabetCountLetter(input);

      expect(output).toEqual(expectedOutput);
    });

    it('should convert the number 13 to M', () => {
      const input = 13;
      const expectedOutput = 'M';

      const output = alphabetCountLetter(input);

      expect(output).toEqual(expectedOutput);
    });
  });

  describe('isCharacterDotOrComma', () => {
    it('should return true for .', () => {
      const inputText = '.';
      const expectedOutput = true;

      const output = isCharacterDotOrComma(inputText);

      expect(output).toEqual(expectedOutput);
    });

    it('should return true for ,', () => {
      const inputText = ',';
      const expectedOutput = true;

      const output = isCharacterDotOrComma(inputText);

      expect(output).toEqual(expectedOutput);
    });

    it('should return false for A', () => {
      const inputText = 'A';
      const expectedOutput = false;

      const output = isCharacterDotOrComma(inputText);

      expect(output).toEqual(expectedOutput);
    });
  });
});
