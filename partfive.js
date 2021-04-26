// IIFE displayFullName
(function displayFullName(firstName = 'Paschal', lastName = 'Erhurun') {
    let fullName = firstName + ' ' + lastName;
    console.log(fullName);
    return fullName;
})();


// The createCalculator function
function createCalculator() {
    return {
        add: function(a, b) {return a + b;},
        subtract: function(a, b) {return a - b;},
        multiply: function(a, b) {return a * b;},
        divide: function(a, b) {return a / b;}
    }
}

console.log(createCalculator().add(6, 9));