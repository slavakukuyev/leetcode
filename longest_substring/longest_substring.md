# Length Of Longest Substring

## lengthOfLongestSubstring
## Summary
The `lengthOfLongestSubstring` function calculates the length of the longest substring without repeating characters in a given string.

## Example Usage
```javascript
const input = "abcabcbb";
const output = lengthOfLongestSubstring(input);
console.log(output); // Output: 3
```

## Code Analysis
### Inputs
- `s` (string): The input string for which the length of the longest substring without repeating characters needs to be calculated.
___
### Flow
1. The function first checks if the length of the input string is less than 2. If so, it returns the length of the string itself.
2. It initializes a map to store characters and their corresponding indices.
3. It also initializes a variable `max` to keep track of the maximum length of the substring without repeating characters.
4. It sets the variable `char` to an empty string.
5. It iterates over each character in the input string using a for loop.
6. Inside the loop, it checks if the map already contains the current character.
7. If the character is already present in the map, it means that a repeating character has been found.
8. In this case, it checks if the current length of the map (number of unique characters) is greater than the current maximum length (`max`).
9. If so, it updates the `max` variable with the current length of the map.
10. It then sets the loop variable `i` to the index of the repeating character in the map, effectively skipping the characters before the repeating character.
11. Finally, it clears the map to start counting the length of a new substring without repeating characters.
12. If the character is not present in the map, it adds the character and its index to the map.
13. After the loop ends, it checks if the current length of the map is greater than the current maximum length (`max`) and updates `max` if necessary.
14. It returns the maximum length of the substring without repeating characters.
___
### Outputs
- The function returns the length of the longest substring without repeating characters in the given input string.
___


## lengthOfLongestSubstring2
## Summary
This code implements the `lengthOfLongestSubstring2` function, which calculates the length of the longest substring without repeating characters in a given string.

## Example Usage
```javascript
const input = "abcabcbb";
const result = lengthOfLongestSubstring2(input);
console.log(result); // Output: 3
```

## Code Analysis
### Inputs
- `s` (string): The input string for which the length of the longest substring without repeating characters needs to be calculated.
___
### Flow
1. If the length of the input string is less than 2, return the length of the string.
2. Create a new map to store characters and their indices.
3. Initialize variables `max` and `left` to 0.
4. Iterate over the characters of the input string using a right pointer.
5. Check if the current character is already present in the map and its index is greater than or equal to the `left` pointer.
6. If the above condition is true, update the `left` pointer to the next index after the repeated character.
7. Update the map with the current character and its index.
8. Calculate the length of the current substring (right - left + 1) and update `max` if necessary.
9. Repeat steps 4-8 until all characters of the input string are processed.
10. Return the value of `max`, which represents the length of the longest substring without repeating characters.
___
### Outputs
- `max` (number): The length of the longest substring without repeating characters in the input string.
___

## lengthOfLongestSubstring3
## Summary
This code implements the `lengthOfLongestSubstring3` function, which calculates the length of the longest substring without repeating characters in a given string.

## Example Usage
```javascript
const input = "abcabcbb";
const result = lengthOfLongestSubstring3(input);
console.log(result); // Output: 3
```

## Code Analysis
### Inputs
- `s` (string): The input string for which the length of the longest substring without repeating characters needs to be calculated.
___
### Flow
1. If the length of the input string is less than 2, return the length of the string itself.
2. Create an empty set to keep track of unique characters.
3. Initialize variables `max` and `left` to 0.
4. Iterate over the characters of the input string using a `right` pointer.
5. Get the character at the `right` index.
6. Check if the character is already present in the set.
7. If it is, remove the character at the `left` index from the set and increment `left` by 1.
8. Add the current character to the set.
9. Update `max` with the maximum value between `max` and the length of the current substring (right - left + 1).
10. Repeat steps 5-9 until all characters in the string have been processed.
11. Return the value of `max`, which represents the length of the longest substring without repeating characters.
___
### Outputs
- The function returns the length of the longest substring without repeating characters in the given input string.
___
