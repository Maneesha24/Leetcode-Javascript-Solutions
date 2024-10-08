/**
 * @author maneeshavenigalla
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you
 * have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels. 
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {

    const jewelSet = new Set(jewels);
    let count = 0;

    for (const stone of stones) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }

    return count;
};

module.exports = numJewelsInStones;