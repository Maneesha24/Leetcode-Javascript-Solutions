/**
 * @author maneeshavenigalla
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr. 
 * The fn function takes one or two arguments:
 * arr[i] - number from the ar
 * i - index of arr[i
 * filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value.
 * A truthy value is a value where Boolean(value) returns true.
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => {

    let result = [];

    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }

    return result;
};

module.exports = filter;