/**
 * @author maneeshavenigalla
 * Given two non-negative integers, num1 and num2 represented as string,
 * return the sum of num1 and num2 as a string.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
  if (num2.length > num1.length) {
    return addStrings(num2, num1);
  }

  let i = num1.length - 1;
  let j = num2.length - 1;
  let result = "";
  let carry = 0;

  while (i >= 0) {
    const digit1 = num1.charAt(i) - "0";
    const digit2 = j < 0 ? 0 : num2.charAt(j) - "0";

    let sum = carry + digit1 + digit2;

    carry = Math.floor(sum / 10);
    sum = sum % 10;

    result = `${sum}${result}`;

    i--;
    j--;
  }

  if (carry > 0) {
    result = `${carry}${result}`;
  }

  return result;
};

module.exports = addStrings;
