let arr = [];

arr.push('Paschal'); // Adds my first name

arr.push('Erhurun'); // Adds my last name

arr.unshift('skye-blue'); // Adds my favourite colour

arr.shift(); // Removes my favourite colour

let arr2 = [];

arr2.unshift(8); // Adds a number 

arr2.splice(1,0, 'JavaScript'); // Adds JavaScript to the end of the array

arr2.indexOf(42); // Checks if 42 is in arr2, and it returns -1

const combinedArr = arr.concat(arr2); // Combines both arr and arr2

console.log(combinedArr);