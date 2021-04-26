// (a) Functions for simple mathematical operations
    // Addition
        function add(a,b) {
            console.log(a + b);
        }

    // Subtraction
        function subtract(a,b) {
            console.log(a - b);
        }

    // Multiplication
        function multiply(a,b) {
            console.log(a * b);
        }

    // Division
        function divide(a,b) {
            console.log(a / b);
        }


// (b) The sayHello function
function sayHello(name) {
    if(name === 'Paschal') {
        console.log('Hello Boss');
    } else{
        console.log(`Hello ${name}`);
    }
}

sayHello('Paschal');
sayHello(/*Type your name here*/);

// (c) The average function
function average(array = [1, 2, 3, 4]){
    let sum = array.reduce(function(a, b) {
        return a + b;
    }, 0);

    let mean = sum / array.length;
    console.log(mean);
}

average(/*Input your array of numbers*/);

// (d) The createStudent function
function createStudent(firstName = 'Jane', lastName = 'Doe') {
    let student = {};
    student.firstName = firstName;
    student.lastName = lastName;

    console.log(student);

    return student;
}

createStudent(/*Your first name, Your last name*/);

// (e) The students array
let tim = createStudent('Tim', 'Gray');
let newton = createStudent('Isaac', 'Newton');
let pascal = createStudent('Pascal', 'Blaise');

let students = [tim, newton, pascal];

// (f) The findStudentByFirstName function
function findByFirstName(firstName = 'Jane') {
    firstName = firstName.toLowerCase();
    for (let i = 0; i < students.length; i++) {
        switch (firstName) {
            case 'tim':
                console.log(true);
                break;
            case 'isaac':
                console.log(true);
                break;
            case 'pascal':
                console.log(true);
                break;
            default:
                console.log(false);
                break;
        }
        break;  
    };
}

findByFirstName();


// (g) The extractEveryThird function
function extractEveryThird(array = [1, 2, 3, 4, 5, 6]) {
    let thirdValue = [];
    for (let i = 0; i < array.length; i++) {
        if(i = i + 2) {
            thirdValue.push(array[i]);
        }
    }
    console.log(thirdValue);
}

extractEveryThird();

// (h) The countEvensAndOdds function
function countEvensAndOdds(array = [1, 2, 3, 4]) {
    let evenNum = [];
    let oddNum = [];
    array.forEach(function(current) {
        if (!(current % 2)) {
            evenNum.push(current);
        } else {
            oddNum.push(current);
        }
    });

    let count = {
        evenNumCount: 0,
        oddNumCount: 0
    }
    count.evenNumCount = evenNum.length;
    count.oddNumCount = oddNum.length;

    console.log(count);
    return count;
}

countEvensAndOdds();

// (i) 
var tricky = "Hello from global";
function trickyScopePractice() {
tricky = "Hello from function scope";
}
console.log(tricky);
