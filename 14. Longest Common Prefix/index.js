/**
 * @author maneeshavenigalla
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {

    let minWord = strs[0];

    for (const str of strs) {
        if (minWord.length > str.length) {
            minWord = str;
        }
    }

    let i = 0;

    for (const str of strs) {
        for (let j = 0; j < str.length; j++) {
            if (minWord[j] != str[j]) {
                i = j;
                break;
            }
        }
    }

    return minWord.slice(0, i);
}

module.exports = longestCommonPrefix;