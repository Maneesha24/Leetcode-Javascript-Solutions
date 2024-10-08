/**
 * @author maneeshavenigalla
 * You are given a string word containing lowercase English letters. Telephone keypads have keys mapped with distinct collections of
 * lowercase English letters, which can be used to form words by pushing them. For example, the key 2 is mapped with ["a","b","c"],
 * we need to push the key one time to type "a", two times to type "b", and three times to type "c" . It is allowed to remap the keys
 * numbered 2 to 9 to distinct collections of letters. The keys can be remapped to any amount of letters, but each letter must be mapped
 * to exactly one key. You need to find the minimum number of times the keys will be pushed to type the string word. Return the minimum
 * number of pushes needed to type word after remapping the keys.
 * @param {string} word
 * @return {number}
 */
const minimumPushes = (word) => {
  const letterFreq = new Array(26).fill(0);

  for (const char of word) {
    const idx = char.charCodeAt(0) - "a".charCodeAt(0);
    letterFreq[idx] += 1;
  }

  letterFreq.sort((a, b) => b - a);

  let result = 0;

  for (let i = 0; i < 26; i++) {
    if (letterFreq[i] === 0) {
      break;
    }

    result += Math.floor(i / 8 + 1) * letterFreq[i];
  }

  return result;
};

module.exports = minimumPushes;
