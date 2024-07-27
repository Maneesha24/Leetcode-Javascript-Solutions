/**
 * @author maneeshavenigalla
 * You are given two string arrays username and website and an integer array timestamp. All the given arrays are of the same length and
 * the tuple [username[i], website[i], timestamp[i]] indicates that the user username[i] visited the website website[i] at time timestamp[i].
 * A pattern is a list of three websites (not necessarily distinct). The score of a pattern is the number of users that visited all the websites
 * in the pattern in the same order they appeared in the pattern. Return the pattern with the largest score. If there is more than one pattern with
 * the same largest score, return the lexicographically smallest such pattern.
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
const mostVisitedPattern = (username, timestamp, website) => {
  const visits = [];
  for (let i = 0; i < username.length; i++) {
    visits.push([username[i], timestamp[i], website[i]]);
  }

  visits.sort((a, b) => a[1] - b[1]);

  const userVisits = {};
  for (const visit of visits) {
    const [user, , site] = visit;
    if (!userVisits[user]) {
      userVisits[user] = [];
    }
    userVisits[user].push(site);
  }

  const patternCount = new Map();
  for (const sites of Object.values(userVisits)) {
    const patterns = new Set();
    for (let i = 0; i < sites.length - 2; i++) {
      for (let j = i + 1; j < sites.length - 1; j++) {
        for (let k = j + 1; k < sites.length; k++) {
          const pattern = `${sites[i]},${sites[j]},${sites[k]}`;
          patterns.add(pattern);
        }
      }
    }
    for (const pattern of patterns) {
      patternCount.set(pattern, (patternCount.get(pattern) || 0) + 1);
    }
  }

  let mostFrequentPattern = "";
  let maxCount = 0;
  for (const [pattern, count] of patternCount) {
    if (
      count > maxCount ||
      (count === maxCount && pattern < mostFrequentPattern)
    ) {
      mostFrequentPattern = pattern;
      maxCount = count;
    }
  }

  return mostFrequentPattern.split(",");
};

module.exports = mostVisitedPattern;
