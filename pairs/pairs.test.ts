import {pairs} from './pairs';

describe('Pairs', () => {   
    
    // Returns 0 if input array is null or empty
    it('should return 0 when input array is null', () => {
        expect(pairs(null, 10)).toBe(0);
      });
  
      // Returns 0 if input array is null or empty
      it('should return 0 when input array is empty', () => {
        expect(pairs([], 10)).toBe(0);
      });
  
      // Returns 0 if input array has only one element
      it('should return 0 when input array has only one element', () => {
        expect(pairs([5], 10)).toBe(0);
      });
  
      // Returns 1 if input array has two elements and their sum equals the given sum
      it('should return 1 when input array has two elements and their sum equals the given sum', () => {
        expect(pairs([3, 7], 10)).toBe(1);
      });
  
      // Returns 0 if input array has two elements and their sum does not equal the given sum
      it('should return 0 when input array has two elements and their sum does not equal the given sum', () => {
        expect(pairs([3, 7], 15)).toBe(0);
      });
  
      // Returns 0 if no pair of elements in the input array sums up to the given sum
      it('should return 0 when no pair of elements in the input array sums up to the given sum', () => {
        expect(pairs([1, 2, 3, 4, 5], 10)).toBe(0);
      });
  
      // Returns the number of pairs whose sum equals the given sum
      it('should return the correct number of pairs whose sum equals the given sum', () => {
        expect(pairs([1, 2, 3, 4, 5], 5)).toBe(2);
        expect(pairs([1, 2, 3, 4, 5], 7)).toBe(2);
      });
})
