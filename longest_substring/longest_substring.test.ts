import { lengthOfLongestSubstring, lengthOfLongestSubstring2, lengthOfLongestSubstring3 } from './longest_substring';

describe('lengthOfLongestSubstring', () => {
  // Returns the length of the longest substring without repeating characters
  it('should return the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  // Returns the length of the string if all characters are unique
  it('should return the length of the string if all characters are unique', () => {
    expect(lengthOfLongestSubstring('abcdefghijklmnopqrstuvwxyz')).toBe(26);
  });

  // Returns 0 for an empty string
  it('should return 0 for an empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  // Returns 1 for a string with only one character
  it('should return 1 for a string with only one character', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });

  // Returns the length of the longest substring without repeating characters
  it('should return the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('bbbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  // Returns the correct length for a string with repeating characters at the beginning or end
  it('should return the correct length for a string with repeating characters at the beginning or end', () => {
    expect(lengthOfLongestSubstring('aab')).toBe(2);
    expect(lengthOfLongestSubstring('bba')).toBe(2);
  });
});

describe('lengthOfLongestSubstring2', () => {
  // Returns 0 for empty string input
  it('should return 0 when input is an empty string', () => {
    expect(lengthOfLongestSubstring2('')).toBe(0);
  });

  // Returns 1 for input with only one character
  it('should return 1 when input has only one character', () => {
    expect(lengthOfLongestSubstring2('a')).toBe(1);
  });

  // Returns length of input string for input with all unique characters
  it('should return the length of the input string when all characters are unique', () => {
    expect(lengthOfLongestSubstring2('abcdefg')).toBe(7);
  });

  // Returns 1 for input with all repeated characters
  it('should return 1 when all characters in the input are repeated', () => {
    expect(lengthOfLongestSubstring2('aaaaaa')).toBe(1);
  });

  // Returns length of input string for input with no repeated characters
  it('should return the length of the input string when there are no repeated characters', () => {
    expect(lengthOfLongestSubstring2('abcdefgh')).toBe(8);
  });

  // Returns length of input string for input with all non-alphanumeric characters
  it('should return the length of the input string when all characters are non-alphanumeric', () => {
    expect(lengthOfLongestSubstring2('!@#$%^&*()')).toBe(10);
  });
});

describe('lengthOfLongestSubstring3', () => {
  // returns the correct length of longest substring without repeating characters
  it('should return the correct length of longest substring without repeating characters when given a string with repeating characters', () => {
    expect(lengthOfLongestSubstring3("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring3("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring3("pwwkew")).toBe(3);
  });

  // returns 0 for an empty string
  it('should return 0 when given an empty string', () => {
    expect(lengthOfLongestSubstring3("")).toBe(0);
  });

  // returns 1 for a string with only one character
  it('should return 1 when given a string with only one character', () => {
    expect(lengthOfLongestSubstring3("a")).toBe(1);
    expect(lengthOfLongestSubstring3("z")).toBe(1);
  });

  // correctly handles a string with all repeating characters
  it('should correctly handle a string with all repeating characters', () => {
    expect(lengthOfLongestSubstring3("bbbbbb")).toBe(1);
    expect(lengthOfLongestSubstring3("cccccc")).toBe(1);
  });

  // correctly handles a string with no repeating characters
  it('should correctly handle a string with no repeating characters', () => {
    expect(lengthOfLongestSubstring3("abcdefg")).toBe(7);
    expect(lengthOfLongestSubstring3("xyz")).toBe(3);
  });

  // correctly handles a string with all special characters
  it('should correctly handle a string with all special characters', () => {
    expect(lengthOfLongestSubstring3("!@#$%^&*()")).toBe(10);
    expect(lengthOfLongestSubstring3("[]{}<>?/")).toBe(8);
  });
});
