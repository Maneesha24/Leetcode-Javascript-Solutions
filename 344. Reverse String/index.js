/**
 * @author maneeshavenigalla
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {

    let left = 0;
    let right = s.length - 1;

    while (left <= right) {

        [s[left], s[right]] = [s[right], s[left]];

        left++;
        right--;
    }

    return s;
}

module.exports = reverseString;