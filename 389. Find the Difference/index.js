/**
 * @author maneeshavenigalla
 * You are given two strings s and t. String t is generated by random shuffling string s and then add one more 
 * letter at a random position. Return the letter that was added to t.
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {

    if (s.length > t.length) {
        return -1;
    }

    let sObj = convertToObj(s);
    let tObj = convertToObj(t);

    for (const char of t) {
        if (!(char in sObj) || sObj[char] != tObj[char]) {
            return char;
        }

        sObj[char] -= 1;
        tObj[char] -= 1;
    }
}

const convertToObj = (word) => {
    const charObj = {};

    for (const char of word) {
        if (char in charObj) {
            charObj[char] += 1;
        } else {
            charObj[char] = 1;
        }
    }

    return charObj;

}

module.exports = findTheDifference;

