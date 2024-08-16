/**
 * @author maneeshavenigalla
 * You are given an integer array cookies, where cookies[i] denotes the number of cookies in the ith bag. You are also given an integer k that
 * denotes the number of children to distribute all the bags of cookies to. All the cookies in the same bag must go to the same child and cannot be split up.
 * The unfairness of a distribution is defined as the maximum total cookies obtained by a single child in the distribution.
 * Return the minimum unfairness of all distributions.
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
const distributeCookies = (cookies, k) => {
  let n = cookies.length;
  let result = Infinity;

  let children = new Array(k).fill(0);

  const backtrack = (idx) => {
    if (idx === n) {
      let currentUnfairness = Math.max(...children);
      result = Math.min(result, currentUnfairness);
      return;
    }

    for (let i = 0; i < k; i++) {
      children[i] += cookies[idx];
      backtrack(idx + 1);
      children[i] -= cookies[idx];
    }
  };

  backtrack(0);
  return result;
};

module.exports = distributeCookies;
