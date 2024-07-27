/**
 * @author maneeshavenigalla
 * A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
 * Every adjacent pair of words differs by a single letter
 * Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList. sk == endWord.
 * Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord,
 * or 0 if no such sequence exists.
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) {
    return 0;
  }

  wordList.push(beginWord);
  let patternObj = {};

  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let pattern = word.slice(0, i) + "*" + word.slice(i + 1);

      if (pattern in patternObj) {
        patternObj[pattern].push(word);
      } else {
        patternObj[pattern] = [word];
      }
    }
  }

  const visit = new Set([beginWord]);
  let queue = [beginWord];
  let result = 1;

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let word = queue.shift();

      if (word === endWord) {
        return result;
      }

      for (let j = 0; j < word.length; j++) {
        let pattern = word.slice(0, j) + "*" + word.slice(j + 1);

        for (const nei of patternObj[pattern] || []) {
          if (!visit.has(nei)) {
            visit.add(nei);
            queue.push(nei);
          }
        }
      }
    }
    result++;
  }

  return 0;
};

module.exports = ladderLength;
