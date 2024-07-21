/**
 * @author maneeshavenigalla
 * Design a logger system that receives a stream of messages along with their timestamps. Each unique message should only
 * be printed at most every 10 seconds (i.e. a message printed at timestamp t will prevent other identical messages from being printed until timestamp t + 10).
 */
var Logger = function () {
  this.map = new Map();
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.map.has(message)) {
    if (timestamp < this.map.get(message) + 10) {
      return false;
    }
  }

  this.map.set(message, timestamp);
  return true;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

module.exports = Logger;
