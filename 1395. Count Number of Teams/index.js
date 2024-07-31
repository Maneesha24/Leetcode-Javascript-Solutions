/**
 * @author maneeshavenigalla
 * There are n soldiers standing in a line. Each soldier is assigned a unique rating value.
 * You have to form a team of 3 soldiers amongst them under the following rules:
 * Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k])
 * A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n)
 * Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).
 * @param {number[]} rating
 * @return {number}
 */
const numTeams = (rating) => {
  let result = 0;

  for (let j = 1; j < rating.length - 1; j++) {
    let leftSmaller = 0;
    let leftGreater = 0;
    let rightSmaller = 0;
    let rightGreater = 0;

    for (let i = 0; i < j; i++) {
      if (rating[i] < rating[j]) {
        leftSmaller++;
      } else if (rating[i] > rating[j]) {
        leftGreater++;
      }
    }

    for (let k = j + 1; k < rating.length; k++) {
      if (rating[j] < rating[k]) {
        rightGreater++;
      } else if (rating[j] > rating[k]) {
        rightSmaller++;
      }
    }

    result += leftSmaller * rightGreater + leftGreater * rightSmaller;
  }

  return result;
};

module.exports = numTeams;
