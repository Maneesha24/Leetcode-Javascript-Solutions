/**
 * @author maneeshavenigalla
 * An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
 * Given an integer n, return true if n is an ugly number.
 * @param {number} n
 * @return {number}
 */
const isUgly = (n) => {
    if (n == 0) {
        return 0;
    }

    for (const factor of [2, 3, 5]) {
        while (n % factor === 0) {
            n = n / factor;
        }
    }

    return n === 1;
};

module.exports = isUgly;