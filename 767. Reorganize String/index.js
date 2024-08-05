const MaxHeap = require("../MaxHeap");

/**
 * @author maneeshavenigalla
 * Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
 * Return any possible rearrangement of s or return "" if not possible.
 * @param {string} s
 * @return {string}
 */
const reorganizeString = (s) => {
  const freqObj = {};

  for (let char of s) {
    if (char in freqObj) {
      freqObj[char] += 1;
    } else {
      freqObj[char] = 1;
    }
  }

  const maxHeap = new MaxHeap();
  for (const char in freqObj) {
    maxHeap.add([freqObj[char], char]);
  }

  const maxFreq = maxHeap.heap[0][0];
  if (maxFreq > Math.ceil(s.length / 2)) {
    return "";
  }

  let prev = null;
  let result = "";

  while (maxHeap.size() > 0) {
    let [freq, char] = maxHeap.remove();
    result += char;
    freq--;

    if (prev) {
      maxHeap.add(prev);
    }

    if (freq > 0) {
      prev = [freq, char];
    } else {
      prev = null;
    }
  }

  for (let i = 1; i < result.length; i++) {
    if (result[i] === result[i - 1]) {
      return "";
    }
  }

  return result;
};

module.exports = reorganizeString;
