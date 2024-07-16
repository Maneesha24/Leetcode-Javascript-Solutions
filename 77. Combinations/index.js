/**
 * @author maneeshavenigalla
 * Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
 * You may return the answer in any order.
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
    let result = [];
    let set = [];

    const dfs = (idx) => {
        if (set.length === k) {
            result.push([...set]);
            return result;
        }

        if (idx > n) {
            return;
        }

        for (let i = idx; i <= n; i++) {
            set.push(i);
            dfs(i + 1);
            set.pop();
        }
    }

    dfs(1);
    return result;
}

module.exports = combine;