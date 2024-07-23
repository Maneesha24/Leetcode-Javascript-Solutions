/**
 * @author maneeshavenigalla
 * Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.queue = [];
  this.sum = 0;
};

/**
 * Returns the moving average of the last size values of the stream.
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.queue.push(val);
  this.sum += val;

  if (this.queue.length > this.size) {
    this.sum -= this.queue.shift();
  }

  return this.sum / this.queue.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

module.exports = MovingAverage;
