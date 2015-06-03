var getProductOfAllIntsExceptAtIndex = function(ints){
  var results = [1];
  var currentResult = 1;

  for (var i = 1; i < ints.length; i++){
    currentResult *= ints[i-1];
    results[i] = currentResult;
  }
  currentResult = 1;
  for (var i = ints.length-2; i >= 0; i--){
    currentResult *= ints[i+1];
    results[i] *= currentResult;
  }

  return results;
};

console.log(getProductOfAllIntsExceptAtIndex([0, 7, 3, 4]))