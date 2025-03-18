'use strict';
const numbers = [];
numbers.push(prompt('enter 1. number:'));
numbers.push(prompt('enter 2. number:'));
numbers.push(prompt('enter 3. number:'));
numbers.push(prompt('enter 4. number:'));
numbers.push(prompt('enter 5. number:'));
console.log('Numbers: ' + numbers);

const findNumber = prompt('Enter number to search:');
if (numbers.includes(findNumber)) {
  console.log(`Number ${findNumber} is found in the array`);
} else {
  console.log(`Number ${findNumber} is NOT found in the array`);
}

numbers.pop();
console.log('Numbers-last: ' + numbers);

numbers.sort((a, b) => a - b);
console.log('Sorted Numbers: ' + numbers);
