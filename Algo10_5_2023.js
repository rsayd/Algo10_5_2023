/* https://leetcode.com/problems/two-sum/

    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values

    Given arr = [2, 11, 7, 15], target = 9,
    Because arr[0] + arr[2] = 2 + 7 = 9
    return [0, 2].

    example 1
    given: [2, 11, 7, 15]
    target: 9
    output: [0,2]

    example 2
    given: [3,2,4]
    target: 6
    output: [1,2]

    example 3
    given: [3,3]
    target: 6
    output: [0,1]
*/


// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first
// create the function and decide what params it needs and what it will return here:








function twoSum(array, target) {
    const hashTable = {}

    for (let i = 0; i < array.length; i++) {
        if (hashTable.hasOwnProperty(array[i])) {
            return [hashTable[array[i]], i]
        }
        //* use target - array[i] to calculate the 'complement' number to search for
        //* store the complement as a key, current index as value
        //* that way, if we find the complement, we can immediately return it and have access
        //* to the original index we need to return 
        hashTable[(target - array[i])] = i;
    }
}






