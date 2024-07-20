/**
 * @author maneeshavenigalla
 * You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.
 * You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:
 * An integer x: Record a new score of x.
 * '+' : Record a new score that is the sum of the previous two scores.
 * 'D': Record a new score that is the double of the previous score.
 * 'C': Invalidate the previous score, removing it from the record.
 * Return the sum of all the scores on the record after applying all the operations.
 * @param {string[]} operations
 * @return {number}
 */
const calPoints = (operations) => {
  const operatorSet = new Set(["+", "D", "C"]);

  let stack = [];

  for (const char of operations) {
    if (operatorSet.has(char)) {
      if (char === "C") {
        stack.pop();
      } else if (char === "D") {
        const num = stack[stack.length - 1];

        stack.push(2 * num);
      } else if (char === "+") {
        const num2 = stack[stack.length - 1];
        const num1 = stack[stack.length - 2];

        stack.push(num2 + num1);
      }
    } else {
      stack.push(parseInt(char));
    }
  }

  return stack.reduce((curr, prev) => curr + prev, 0);
};

module.exports = calPoints;
