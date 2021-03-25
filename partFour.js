var arr = ["JavaScript", "Python", "Ruby", "Java"];

let returnedArr = arr.slice(1,3); // Returns ["Python", "Ruby"] - Question one

let newArr = ["Haskell", "Clojure"]; // Question two
combinedArr = arr.concat(newArr)

let str = arr.toString(); // Question three

/*
Question four
Pass by value means making a copy in memory of the actual parameter's value (say like a number or string or even a boolean) that is passed in, a copy of the contents of the actual parameter. Pass by value can be used when the parameter in question is used only for computation purposes, and does not require any change for the client program.

In pass by reference (also called pass by address), a copy of the address of the actual parameter is stored. Pass by reference is used when changes to the parameter passed in by the client program is required.
*/

console.log(str);