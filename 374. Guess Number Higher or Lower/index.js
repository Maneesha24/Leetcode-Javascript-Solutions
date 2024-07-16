/**
 * @author maneeshavenigalla
 * We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked.
 * Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
 * You call a pre-defined API int guess(int num), which returns three possible results:
 * -1: Your guess is higher than the number I picked (i.e. num > pick)
 * 1: Your guess is lower than the number I picked (i.e. num < pick)
 * 0: your guess is equal to the number I picked (i.e. num == pick)
 * Return the number that I picked.
 * @param {*} n 
 */
const guessNumber = (n) => {
    let left = 1;
    let right = n;

    while (true) {
        let mid = Math.floor((left + right) / 2);
        const guessNum = guess(mid);
        if (guessNum === 1) {
            left = mid + 1;
        } else if (guessNum === -1) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
};

const guess = (num) => {
    if (num > 6) {
        return -1;
    } else if (num < 6) {
        return 1;
    } else {
        return 0;
    }
};

module.exports = guessNumber;