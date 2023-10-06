import { lengthOfLongestSubstring1, lengthOfLongestSubstring2, lengthOfLongestSubstring3 } from './longest_substring';

describe('lengthOfLongestSubstring', () => {
  let lolS = [lengthOfLongestSubstring1, lengthOfLongestSubstring2, lengthOfLongestSubstring3];

  for (let i = 0; i < lolS.length; i++) {
    let lol = lolS[i];

    // Returns the length of the longest substring without repeating characters
    it(`func: lengthOfLongestSubstring${i} should return the length of the longest substring without repeating characters`, () => {
      expect(lol('abcabcbb')).toBe(3);
      expect(lol('bbbbb')).toBe(1);
      expect(lol('pwwkew')).toBe(3);
    });

    // Returns the length of the string if all characters are unique
    it(`func: lengthOfLongestSubstring${i} should return the length of the string if all characters are unique`, () => {
      expect(lol('abcdefghijklmnopqrstuvwxyz')).toBe(26);
    });

    // Returns 0 for an empty string
    it(`func: lengthOfLongestSubstring${i} should return 0 for an empty string`, () => {
      expect(lol('')).toBe(0);
    });

    // Returns 1 for a string with only one character
    it(`func: lengthOfLongestSubstring${i} should return 1 for a string with only one character`, () => {
      expect(lol('a')).toBe(1);
    });

    // Returns the length of the longest substring without repeating characters
    it(`func: lengthOfLongestSubstring${i} should return the length of the longest substring without repeating characters`, () => {
      expect(lol('bbbbbb')).toBe(1);
      expect(lol('abcabcbb')).toBe(3);
      expect(lol('pwwkew')).toBe(3);
      expect(lol('')).toBe(0);
    });

    // Returns the correct length for a string with repeating characters at the beginning or end
    it(`func: lengthOfLongestSubstring${i} should return the correct length for a string with repeating characters at the beginning or end`, () => {
      expect(lol('aab')).toBe(2);
      expect(lol('bba')).toBe(2);
    });
  }
});
