# Reverse Integer

## Summary
The `reverse` function takes a number as input and returns its reverse. If the input number is outside the range of 32-bit signed integers, or if it is zero, the function returns 0.

## Example Usage
```javascript
const reversedNumber = reverse(123);
console.log(reversedNumber); // Output: 321
```

## Code Analysis
### Inputs
- `x` (number): The number to be reversed.
___
### Flow
1. Check if the input number is zero or outside the range of 32-bit signed integers. If so, return 0.
2. Initialize a variable `sign` to 1. If the input number is negative, set `sign` to -1 and make the input number positive.
3. Convert the input number to a string and split it into an array of characters.
4. Initialize two pointers, `left` and `right`, pointing to the start and end of the array respectively.
5. Swap the characters at `left` and `right` positions using array destructuring, and increment `left` and decrement `right`.
6. Repeat step 5 until `left` becomes greater than or equal to `right`.
7. Join the array of characters back into a string, convert it to a number, and multiply it by `sign` to restore the original sign.
8. Check if the reversed number is outside the range of 32-bit signed integers. If so, return 0.
9. Return the reversed number.
___
### Outputs
- Reversed number (number): The input number reversed. If the input number is zero or outside the range of 32-bit signed integers, the function returns 0.
___
