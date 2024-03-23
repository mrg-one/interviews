function maxProfit(prices: number[]): number {
    
    let profit = 0
    let buy = prices[0]

    for(let i = 0; i < prices.length; i++){
       if(prices[i] > buy) {
           profit = Math.max(profit, prices[i] - buy)
       } else {
           buy = prices[i]
       }
    }
    
    return profit
};

const prices122 = [7,1,5,3,6,4]
console.log(maxProfit(prices))
