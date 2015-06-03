var computeCombinations = function(amount, denoms){
  var num = 0, storage = {};

  var recurse = function(current, index){
    if (current < 0) return 0;
    if (current == 0) return 1;
    // if (storage[current + "." + index]) return storage[current + '.' + index];

    var total = 0;
    
    for (var i = index; i < denoms.length; i++) {
      total += recurse(current - denoms[i], i);
    }

    // storage[current + '.' + index] = total;

    return total;
  };

  num = recurse(amount, 0);

  return num;
};

var computeCombinationsIterative = function(amount, denoms){
  var ways = 0, storage = [];

  for (var i=0;i<=amount;i++) storage.push(0);

  storage[0] = 1;

  denoms.forEach(function(denom){
    for (var i = denom; i <= amount; i++)
      storage[i] += storage[i-denom];
  });

  return storage[amount];
};

var amt = 20;
var dnm = [1,2,3];

console.log(computeCombinationsIterative(amt, dnm));
console.log(computeCombinations(amt, dnm));