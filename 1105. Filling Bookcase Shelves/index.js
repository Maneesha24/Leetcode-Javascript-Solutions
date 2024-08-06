/**
 * @author maneeshavenigalla
 * You are given an array books where books[i] = [thicknessi, heighti] indicates the thickness and height of the ith book.
 * You are also given an integer shelfWidth. We want to place these books in order onto bookcase shelves that have a total
 * width shelfWidth. We choose some of the books to place on this shelf such that the sum of their thickness is less than
 * or equal to shelfWidth, then build another level of the shelf of the bookcase so that the total height of the bookcase
 * has increased by the maximum height of the books we just put down. We repeat this process until there are no more books to place.
 * Return the minimum possible height that the total bookshelf can be after placing shelves in this manner.
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
const minHeightShelves = (books, shelfWidth) => {
  let n = books.length;

  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    let width = 0;
    let height = 0;

    for (let j = i; j > 0; j--) {
      width += books[j - 1][0];

      if (width > shelfWidth) {
        break;
      }

      height = Math.max(height, books[j - 1][1]);
      dp[i] = Math.min(dp[i], height + dp[j - 1]);
    }
  }

  return dp[n];
};

module.exports = minHeightShelves;
