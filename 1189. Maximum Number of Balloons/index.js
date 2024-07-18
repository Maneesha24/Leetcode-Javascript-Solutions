/**
 * @author maneeshavenigalla
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible. 
 * You can use each character in text at most once. Return the maximum number of instances that can be formed.
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = (text) => {

    let count = 0;

    const wordObj = convertToObj(text);

    while (wordObj["b"] >= 1 && wordObj["a"] >= 1 && wordObj["l"] >= 2 && wordObj["o"] >= 2 && wordObj["n"] >= 1) {
        count++;

        wordObj["b"] -= 1;
        wordObj["a"] -= 1;
        wordObj["l"] -= 2;
        wordObj["o"] -= 2;
        wordObj["n"] -= 1;
    }

    return count;
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

module.exports = maxNumberOfBalloons;