import { isCharacterDotOrComma, morseCodeTable } from '../util';

export const convertWordToMorseCode = (word: string) => word.split('').reduce((morseCode, letter, currentIndex) => {
  if (isCharacterDotOrComma(letter)) return morseCode + morseCodeTable[letter];

  if (currentIndex === word.length - 1 || isCharacterDotOrComma(word[currentIndex + 1])) {
    return morseCode + morseCodeTable[letter];
  }

  return `${morseCode}${morseCodeTable[letter]}|`;
}, '');

export const convertTextToMorseCode = (text: string) => text.toUpperCase().split(' ').map(convertWordToMorseCode).join('/');
