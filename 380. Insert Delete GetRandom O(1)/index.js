/**
 * @author maneeshavenigalla
 * Implement the RandomizedSet class:
 * RandomizedSet() Initializes the RandomizedSet object.
 */
var RandomizedSet = function () {
    this.map = new Map();
    this.arr = [];
};

/** 
 * Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (!this.map.has(val)) {
        this.arr.push(val);
        this.map.set(val, this.arr.length);

        return true;
    }

    return false;
};

/** 
 * Removes an item val from the set if present. Returns true if the item was present, false otherwise.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) {
        return false;
    }

    const idx = this.map.get(val);
    const endIdx = this.arr.length - 1;

    [this.arr[idx], this.arr[endIdx]] = [this.arr[endIdx], this.arr[idx]];
    this.arr.pop();
    this.map.set(this.arr[idx], idx);
    this.map.delete(val);

    return true;
};

/**
 * Returns a random element from the current set of elements (it's guaranteed that at least one 
 * element exists when this method is called). Each element must have the same probability of being returned.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.arr[Math.floor(Math.random()) * this.arr.length];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

module.exports = RandomizedSet;