/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
  this.timeToLive = timeToLive;
  this.tokens = new Map();
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
  if (!this.tokens.has(tokenId)) {
    const tokenInfo = {
      tokenId,
      expiresAt: currentTime + this.timeToLive,
    };
    this.tokens.set(tokenId, tokenInfo);
  }
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
  if (!this.tokens.has(tokenId)) {
    return;
  }

  let token = this.tokens.get(tokenId);
  if (token.expiresAt > currentTime) {
    this.tokens.set(tokenId, {
      ...token,
      expiresAt: currentTime + this.timeToLive,
    });
  } else {
    this.tokens.delete(tokenId);
  }
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
  let result = 0;

  for (const [key, token] of this.tokens.entries()) {
    if (token.expiresAt > currentTime) {
      result++;
    }
  }

  return result;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
module.exports = AuthenticationManager;
