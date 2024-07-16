/**
 * @author maneeshavenigalla
 * Design a HashSet without using any built-in hash table libraries.
 * Implement MyHashSet class:
 */
var MyHashSet = function () {
    this.set = [];
};

/** 
 * Inserts the value key into the HashSet.
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this.set[key] = key;
};

/** 
 * Returns whether the value key exists in the HashSet or not.
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    this.set[key] = undefined;
};

/** 
 * Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return this.set[key] !== undefined;
};

module.exports = MyHashSet;