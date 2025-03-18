'use strict';
let i;
const arr = [];
while (i != 'done') {
  i = prompt("Enter a number (or 'done' to finish): ");
  if (i != 'done') {
    arr.push(i);
  }
}

const evens = [];
for (let j of arr) {
  if (j % 2 == 0) {
    evens.push(j);
  }
}
if (evens.length != 0) {
  document.querySelector('#target').innerHTML = 'Even numbers: ' + evens;
} else {
  document.querySelector('#target').innerHTML = 'Even numbers: None';
}
