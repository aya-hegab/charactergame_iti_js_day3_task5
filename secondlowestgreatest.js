var inptArr = [4, 5, 1, 3, 2];

var secondLowestGreatest = function (arr) {
  var newArr = [];
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  newArr.push(sortedArr[1], sortedArr[sortedArr.length - 2]);
  return newArr;
};

console.log(inptArr);
console.log(secondLowestGreatest(inptArr));
