/**
 * @author maneeshavenigalla
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock 
 * at any time. However, you can buy it then immediately sell it on the same day. Find and return the maximum profit you can achieve.
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {

    let minPrice = Infinity
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        minPrice = Math.min(minPrice, price);

        if (price - minPrice > 0) {
            profit += price - minPrice;
            minPrice = price;
        }
    }

    return profit;
}

module.exports = maxProfit;