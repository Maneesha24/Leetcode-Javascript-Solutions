/**
 * @author maneeshavenigalla
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
 * If a string is longer than the other, append the additional letters onto the end of the merged string.Return the merged string.
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {

    let minLength = Math.min(word1.length, word2.length);

    let result = "";

    for(let i = 0; i < minLength; i++) {
        result += word1[i];
        result += word2[i];
    }

    if (word1.length > minLength) {
        result += word1.slice(minLength);
    }

    if (word2.length > minLength) {
        result += word2.slice(minLength);
    }


    return result;

};

module.exports = mergeAlternately