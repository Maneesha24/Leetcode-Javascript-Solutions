/**
 * @author maneeshavenigalla
 * TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL s
 * uch as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL. Encodes a URL to a shortened URL.
 * @param {string} longUrl
 * @return {string}
 */

const base = "http://tinyurl.com/";
const encodeMap = new Map();
const decodeMap = new Map();

var encode = function (longUrl) {
    if (!encodeMap.has(longUrl)) {
        const shortUrl = base + encodeMap.size + 1;

        encodeMap.set(longUrl, shortUrl);
        decodeMap.set(shortUrl, longUrl);
    }

    return encodeMap.get(longUrl);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    return decodeMap.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

module.exports = { encode, decode }