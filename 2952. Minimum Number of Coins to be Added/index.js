/**
 * @author maneeshavenigalla
 * You are given a 0-indexed integer array coins, representing the values of the coins available, and an integer target.
 * An integer x is obtainable if there exists a subsequence of coins that sums to x. Return the minimum number of coins
 * of any value that need to be added to the array so that every integer in the range [1, target] is obtainable.
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
const minimumAddedCoins = (coins, target) => {
  coins.sort((a, b) => a - b);

  let currentSum = 0;
  let result = 0;
  let i = 0;

  while (currentSum < target) {
    if (i < coins.length && coins[i] <= currentSum + 1) {
      currentSum += coins[i];
      i++;
    } else {
      currentSum += currentSum + 1;
      result++;
    }
  }

  return result;
};

module.exports = minimumAddedCoins;
