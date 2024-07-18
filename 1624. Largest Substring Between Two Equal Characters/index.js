/**
 * @author maneeshavenigalla
 * Given a string s, return the length of the longest substring between two equal characters, excluding the 
 * two characters. If there is no such substring return -1. A substring is a contiguous sequence of characters within a string.
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = (s) => {
    let maxlength = -1;
    let charObj = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char in charObj) {
            maxlength = Math.max(maxlength, i - charObj[char]);
        } else {
            charObj[char] = i + 1;
        }
    }

    return maxlength;
};

module.exports = maxLengthBetweenEqualCharacters;