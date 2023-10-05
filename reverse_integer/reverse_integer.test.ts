import { reverseInteger } from './reverse_integer';

describe('reverse', () => {
    // Should reverse a positive number
    it('should reverse a positive number when input is positive', () => {
      expect(reverseInteger(123)).toBe(321);
    });

    // Should reverse a negative number
    it('should reverse a negative number when input is negative', () => {
      expect(reverseInteger(-123)).toBe(-321);
    });

    // Should reverse a number with trailing zeros
    it('should reverse a number with trailing zeros when input has trailing zeros', () => {
      expect(reverseInteger(1200)).toBe(21);
    });

    // Should return 0 when input is 0
    it('should return 0 when input is 0', () => {
      expect(reverseInteger(0)).toBe(0);
    });

    // Should return 0 when reversed number is outside of the 32-bit signed integer range
    it('should return 0 when reversed number is outside of the 32-bit signed integer range', () => {
      expect(reverseInteger(2147483648)).toBe(0);
    });

    // Should return 0 when input is outside of the 32-bit signed integer range
    it('should return 0 when input is outside of the 32-bit signed integer range', () => {
      expect(reverseInteger(2147483649)).toBe(0);
    });

    // Should reverse a single digit number
    it('should reverse a single digit number when input is a single digit number', () => {
      expect(reverseInteger(5)).toBe(5);
    });

    // Should handle the largest negative number (-2^31) correctly
    it('should handle the largest negative number correctly when input is the largest negative number', () => {
      expect(reverseInteger(-2147483648)).toBe(0);
    });

    // Should return 0 when input is a floating-point number
    it('should return 0 when input is a floating-point number', () => {
      expect(reverseInteger(3.14)).toBe(0);
    });

    // Should return 0 when input is a non-integer number


    // Should return 0 when input is a non-integer number
    it('should return 0 when input is a non-integer number', () => {
      expect(reverseInteger(-3.14)).toBe(0);
    });

    // Should return 0 when input is a non-integer number


    // Should return 0 when input is a non-integer number
    it('should return 0 when input is a non-integer number', () => {
      expect(reverseInteger(3.14)).toBe(0);
    });




});
