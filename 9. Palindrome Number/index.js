/**
 * @author maneeshavenigalla
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * @param {number} x
 * @return {number}
 */
const isPalindrome = (x) => {
    if (x < 0) {
        return false;
    }

    let num = x;

    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }


    return reversed === x;
};

module.exports = isPalindrome;
