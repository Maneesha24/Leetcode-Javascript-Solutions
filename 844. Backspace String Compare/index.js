/**
 * @author maneeshavenigalla
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. 
 * '#' means a backspace character.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
    return removeHashes(s) === removeHashes(t);
}

const removeHashes = (word) => {
    let stack = [];

    for (const char of word) {
        if (char === "#") {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
}

module.exports = backspaceCompare;