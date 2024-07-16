/**
 * @author maneeshavenigalla
 * Design a HashMap without using any built-in hash table libraries.
 * Implement the MyHashMap class:
 */
var MyHashMap = function () {
    this.map = new Map();
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    this.map.set(key, value);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    if (!this.map.has(key)) {
        return -1;
    }

    return this.map.get(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    return this.map.delete(key);
};


module.exports = MyHashMap;