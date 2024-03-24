function maxProfit(prices: number[]): number {
    let maxProfit = 0
  for (let sellIndex = 1; sellIndex < prices.length; sellIndex++) {
    const buyIndex = sellIndex - 1
    if (prices[sellIndex] > prices[buyIndex]) {
      maxProfit += prices[sellIndex] - prices[buyIndex]
    }
  }

  return maxProfit

}

const prices122 = [7,6,4,3,1];
console.log(maxProfit(prices122));
