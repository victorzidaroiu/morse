import { convertTextToMorseCode } from './morse';
import { alphabetCountLetter } from '../util';

const obfuscateMorseCodeGroup = (character: string, count: number) => {
  const obfuscatedValue = character === '.' ? count : alphabetCountLetter(count);

  return obfuscatedValue;
};

const obfuscateMorseCode = (text: string) => {
  let currentCharacter = null;
  let currentCharacterCount = 0;

  const obfuscatedText = text.split('').reduce((accumulator: string, letter: string) => {
    if (!currentCharacter) {
      currentCharacter = letter;
    }

    if (letter === '|' || letter === '/') {
      const obfuscatedMorseCode = obfuscateMorseCodeGroup(currentCharacter, currentCharacterCount);
      currentCharacterCount = 0;
      currentCharacter = null;

      return `${accumulator}${obfuscatedMorseCode}${letter}`;
    }

    if (currentCharacter !== letter) {
      const obfuscatedMorseCode = obfuscateMorseCodeGroup(currentCharacter, currentCharacterCount);

      currentCharacter = letter;
      currentCharacterCount = 1;

      return `${accumulator}${obfuscatedMorseCode}`;
    }

    currentCharacterCount += 1;

    return accumulator;
  }, '');

  const lastObfuscatedGroup = obfuscateMorseCodeGroup(currentCharacter, currentCharacterCount);

  return obfuscatedText + lastObfuscatedGroup;
};

export const convertTextToObfuscatedMorseCode = (text: string) => obfuscateMorseCode(
  convertTextToMorseCode(text),
);
