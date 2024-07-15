/**
 * @author maneeshavenigalla
 * An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
 * Given an integer n, return the nth ugly number.
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = (n) => {
    if (n === 0) {
        return 0;
    }

    let ugly = new Array(n);
    ugly[0] = 1;

    let index2 = 0, index3 = 0, index5 = 0;
    let factor2 = 2, factor3 = 3, factor5 = 5;

    for (let i = 1; i < n; i++) {
        let min = Math.min(factor2, factor3, factor5);
        ugly[i] = min;

        if (factor2 === min) {
            index2++;
            factor2 = 2 * ugly[index2];
        }

        if (factor3 === min) {
            index3++;
            factor3 = 3 * ugly[index3];
        }

        if (factor5 === min) {
            index5++;
            factor5 = 5 * ugly[index5];
        }
    }

    return ugly[n - 1];
};

module.exports = nthUglyNumber;