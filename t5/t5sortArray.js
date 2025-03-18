'use strict';
function sortArray(arr, order) {
  if (order == 'asc') {
    return arr.sort((a, b) => a - b);
  } else if (order == 'desc') {
    return arr.sort((a, b) => b - a);
  }
}

const arr = [9, 3, 5, 1, 2, 6, 7, 8];
console.log(sortArray(arr, 'asc'));
console.log(sortArray(arr, 'desc'));
