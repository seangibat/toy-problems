var computeMaxProfit  = function(prices){
  var maxProfit = 0, low = prices[0];

  for (var i = 1; i < prices.length; i++){
    var currentPrice = prices[i];
    if (currentPrice - low > maxProfit) maxProfit = currentPrice - low;
    if (currentPrice < low) low = currentPrice;
  }

  return maxProfit;
};