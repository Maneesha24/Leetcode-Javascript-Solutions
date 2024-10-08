/**
 * @author maneeshavenigalla
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    let length = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            length++;
        } else if (length > 0) {
            break;
        }
    }

    return length;
}

module.exports = lengthOfLastWord;