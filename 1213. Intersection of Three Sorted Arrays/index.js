/**
 * @author maneeshavenigalla
 * Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array
 * of only the integers that appeared in all three arrays.
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
const arraysIntersection = (arr1, arr2, arr3) => {
    
  const arr2Set = new Set(arr2);
  const arr3Set = new Set(arr3);

  let result = arr1.filter((val) => arr2Set.has(val));
  result = result.filter((val) => arr3Set.has(val));

  return result;
};

module.exports = arraysIntersection;
