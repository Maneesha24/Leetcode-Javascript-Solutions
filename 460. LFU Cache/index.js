class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.freq = 1;

    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insert(node) {
    const firstNode = this.head.next;
    this.head.next = node;
    node.prev = this.head;

    node.next = firstNode;
    firstNode.prev = node;
  }

  delete(node) {
    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;
  }

  pop() {
    if (this.tail.prev === this.head) {
      return null;
    }

    const prev = this.tail.prev;
    this.delete(prev);

    return prev;
  }

  isEmpty() {
    return this.tail.prev === this.head;
  }
}

/**
 * @author maneeshavenigalla
 * esign and implement a data structure for a Least Frequently Used (LFU) cache.
 * Implement the LFUCache class:
 * LFUCache(int capacity) Initializes the object with the capacity of the data structure.
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.minFreq = 0;
  this.keyNode = new Map();
  this.freqList = new Map();
};

/**
 * Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (!this.keyNode.has(key)) {
    return -1;
  }

  const node = this.keyNode.get(key);
  this.update(node);
  return node.value;
};

LFUCache.prototype.update = function (node) {
  const freq = node.freq;
  const list = this.freqList.get(freq);
  list.delete(node);

  if (freq === this.minFreq && list.isEmpty()) {
    this.minFreq++;
  }

  node.freq++;

  if (!this.freqList.has(node.freq)) {
    this.freqList.set(node.freq, new DoublyLinkedList());
  }
  this.freqList.get(node.freq).insert(node);
};

/**
 * Update the value of the key if present, or inserts the key if not already present. When the cache reaches
 * its capacity, it should invalidate and remove the least frequently used key before inserting a new item.
 * For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) {
    return;
  }

  if (this.keyNode.has(key)) {
    const node = this.keyNode.get(key);
    node.value = value;
    this.update(node);
    
  } else {
    if (this.size === this.capacity) {
      const list = this.freqList.get(this.minFreq);
      const nodeToRemove = list.pop();
      this.keyNode.delete(nodeToRemove.key);
      this.size--;
    }

    const newNode = new Node(key, value);
    this.keyNode.set(key, newNode);

    if (!this.freqList.has(1)) {
      this.freqList.set(1, new DoublyLinkedList());
    }

    this.freqList.get(1).insert(newNode);
    this.minFreq = 1;
    this.size++;
  }
};

module.exports = LFUCache;
