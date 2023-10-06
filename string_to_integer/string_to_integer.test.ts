import { myAtoi } from './string_to_integer';

describe('myAtoi', () => {

  // Returns the correct integer when given a valid string of digits.
  it('should return the correct integer when given a valid string of digits', () => {
    expect(myAtoi("123")).toBe(123);
    expect(myAtoi("0")).toBe(0);
    expect(myAtoi("-456")).toBe(-456);
    expect(myAtoi("+789")).toBe(789);
    expect(myAtoi("-+789")).toBe(0);
    expect(myAtoi("++1")).toBe(0);
    expect(myAtoi("--1")).toBe(0);
    expect(myAtoi("0000-41")).toBe(0);
    expect(myAtoi("0000+41")).toBe(0);

  });

  // Returns 0 when given an empty string.
  it('should return 0 when given an empty string', () => {
    expect(myAtoi("")).toBe(0);
  });

  // Ignores leading and trailing white space characters.
  it('should ignore leading and trailing white space characters', () => {
    expect(myAtoi("   123   ")).toBe(123);
    expect(myAtoi("   -456   ")).toBe(-456);
    expect(myAtoi("   +789   ")).toBe(789);
  });

  // Returns 0 when given a string with non-digit characters.
  it('should return 0 when given a string with non-digit characters', () => {
    expect(myAtoi("abc")).toBe(0);
    expect(myAtoi("123abc")).toBe(123);
    expect(myAtoi("-456abc")).toBe(-456);
    expect(myAtoi("+789abc")).toBe(789);
  });

  // Returns the minimum integer value when given a string that is less than the minimum integer value.
  it('should return the minimum integer value when given a string that is less than the minimum integer value', () => {
    expect(myAtoi("-2147483649")).toBe(-2147483648);
    expect(myAtoi("-10000000000")).toBe(-2147483648);
  });

  // Returns the maximum integer value when given a string that is greater than the maximum integer value.
  it('should return the maximum integer value when given a string that is greater than the maximum integer value', () => {
    expect(myAtoi("2147483648")).toBe(2147483647);
    expect(myAtoi("10000000000")).toBe(2147483647);
  });
});
