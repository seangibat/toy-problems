var highestProductOfThree = function(ints){
  if (ints.length < 3) return null;

  var highest = secondHighest = thirdHighest = -Infinity;
  var lowest = secondLowest = Infinity;

  for (var i = 0; i < ints.length; i++){
    var number = ints[i];

    if (number > highest) {
      thirdHighest = secondHighest
      secondHighest = highest;
      highest = number;
    }
    else if (number > secondHighest) {
      thirdHighest = secondHighest;
      secondHighest = number;
    }
    else if (number > thirdHighest) {
      thirdHighest = number;
    }

    if (number < lowest) {
      secondLowest = lowest;
      lowest = number;
    }
    else if (number < secondLowest) {
      secondLowest = number;
    }
  }

  return Math.max(highest*secondHighest*thirdHighest, highest*lowest*secondLowest);
};

var arr = [3,9,1,7];

console.log(highestProductOfThree(arr));