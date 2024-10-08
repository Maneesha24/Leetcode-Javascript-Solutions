/**
 * @author maneeshavenigalla
 * Given two strings needle and haystack, return the index of the first occurrence of 
 * needle in haystack, or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    if (haystack.length < needle.length) {
        return -1;
    }

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }

    return -1;
}

module.exports = strStr;