/**
 * @author maneeshavenigalla
 * You are given an array of strings words and a string chars. A string is good if it can be formed by 
 * characters from chars (each character can only be used once). Return the sum of lengths of all good strings in words.
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = (words, chars) => {

    const charObj = convertToObj(chars);

    let result = 0;

    for (let i = 0; i < words.length; i++) {
        let wordObj = convertToObj(words[i]);
        let isGood = true;

        for (const [char, count] of Object.entries(wordObj)) {
            if (!(char in charObj) || charObj[char] < count) {
                isGood = false;
                break;
            }
        }

        if (isGood) {
            result += words[i].length;
        }
    }

    return result;
};

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

module.exports = countCharacters;