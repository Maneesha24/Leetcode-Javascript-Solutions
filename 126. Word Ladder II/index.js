/**
 * @author maneeshavenigalla
 * A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
 * Every adjacent pair of words differs by a single letter
 * Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList sk == endWord
 * Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if
 * no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) {
    return [];
  }

  const result = [];
  const patternObj = {};
  const steps = {};

  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.substring(0, i) + "*" + word.substring(i + 1);

      if (pattern in patternObj) {
        patternObj[pattern].push(word);
      } else {
        patternObj[pattern] = [word];
      }

      steps[pattern] = wordList.length;
    }
  }

  const queue = [[beginWord]];

  while (queue.length > 0) {
    const current = queue.shift();

    const set = new Set(current);
    const lastWord = current[current.length - 1];

    if (lastWord === endWord) {
      if (result.length === 0 || current.length === result[0].length) {
        result.push(current);
      } else {
        break;
      }
    } else {
      for (let i = 0; i < lastWord.length; i++) {
        const pattern =
          lastWord.substring(0, i) + "*" + lastWord.substring(i + 1);

        if (!(pattern in patternObj) || current.length > steps[pattern]) {
          continue;
        }

        for (const nextWord of patternObj[pattern])
          if (!set.has(nextWord)) {
            queue.push([...current, nextWord]);
          }

        steps[pattern] = current.length;
      }
    }
  }

  return result;
};

module.exports = findLadders;
