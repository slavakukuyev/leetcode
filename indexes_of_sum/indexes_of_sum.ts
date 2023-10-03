// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//lets assume we dont want to use the same element twice
function twoSum(nums: Array<number>, target: number): Array<number> {
    if (!Array.isArray(nums) || nums.length < 2) {
        return []
    }

    if (!Number.isInteger(target)) {
        return []
    }

    let map: { [key: number]: number[] } = {}; // add index signature to map object
    let indexes: number[] = [];
    let uniqueNums = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        let diff: number = target - nums[i];

        if (!Array.isArray(map[diff]) || uniqueNums.has(diff)) {
            map[nums[i]] = [i];
            continue;
        }

        let index = map[diff].shift()
        indexes.push(...[index!, i])

        uniqueNums.add(diff)
        uniqueNums.add(nums[i])

        if (!map[diff].length) {
            delete map[diff]
        }
    }

    return indexes
};

export { twoSum };
