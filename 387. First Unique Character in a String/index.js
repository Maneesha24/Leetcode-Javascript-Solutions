/**
 * @author maneeshavenigalla
 * Given a string s, find the first non-repeating character in it and return its 
 * index. If it does not exist, return -1.
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {

    let sObj = convertToObj(s);

    for (let i = 0; i < s.length; i++) {
        if (sObj[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}

const convertToObj = (str) => {
    let charObj = {};

    for (const char of str) {
        if (char in charObj) {
            charObj[char] += 1;
        } else {
            charObj[char] = 1;
        }
    }

    return charObj;
}

module.exports = firstUniqChar;