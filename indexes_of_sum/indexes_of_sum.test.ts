import { twoSum } from './indexes_of_sum';

describe('twoSum', () => {

    // Returns the correct indexes for a valid input with two numbers that add up to the target
    it('should return the correct indexes when there are two numbers that add up to the target', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const result = twoSum(nums, target);
      expect(result).toEqual([0, 1]);
    });

    // Returns the correct indexes for a valid input with more than two numbers that add up to the target
    it('should return the correct indexes when there are more than two numbers that add up to the target', () => {
      const nums = [3, 2, 4, 5, 1,2,4];
      const target = 6;
      const result = twoSum(nums, target);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    // Returns the correct indexes for a valid input with negative numbers that add up to the target
    it('should return the correct indexes when there are negative numbers that add up to the target', () => {
      const nums = [-2, -7, 11, 15];
      const target = 9;
      const result = twoSum(nums, target);
      expect(result).toEqual([0, 2]);
    });

    // Returns an empty array for an input with only one number
    it('should return an empty array when there is only one number in the input', () => {
      const nums = [5];
      const target = 5;
      const result = twoSum(nums, target);
      expect(result).toEqual([]);
    });
});
