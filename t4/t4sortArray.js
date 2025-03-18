'use strict';
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

const arr = [9, 3, 5, 1, 2, 6, 7, 8];
sortArray(arr);
console.log(arr);
