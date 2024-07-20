/**
 * @author maneeshavenigalla
 * Given a string s which represents an expression, evaluate this expression and return its value.
 * The integer division should truncate toward zero.
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  let stack = [];
  let num = "";
  let sign = null;

  for (let i = 0; i <= s.length; i++) {
    const curr = s[i];

    if (curr === " ") continue;

    if (!isNaN(curr)) {
      num += curr;
    } else {
      num = Number(num);
      switch (sign) {
        case "+":
        case null:
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          stack.push(parseInt(stack.pop() / num));
          break;
      }

      sign = curr;
      num = "";
    }
  }
  return stack.reduce((a, b) => {
    return a + b;
  }, 0);
};

module.exports = calculate;
