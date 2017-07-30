
function largestOfFour(arr) {
  var sorted = [],
      largest = [];
  for (i = 0; i < arr.length; i++) {
      sorted.push(arr[i].sort(function(a, b) {return a-b;}));
      largest[i] = sorted[i][sorted[i].length - 1]; 
  }
  
  // You can do this!
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
