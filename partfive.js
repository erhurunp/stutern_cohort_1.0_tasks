// Question One
function printNumbers(from = 0, to = 5) {
    let start = from;
  
    let timerId = setInterval(function() {
      console.log(start);
      if (start == to) {
        clearInterval(timerId);
      }
      start++;
    }, 1000);
}

printNumbers();


// Question Two
let i = 0;

setTimeout(() => console.log(i), 100); // This will output 10000000

for(j = 0; j < 10000000; j++) {
    i++;
}