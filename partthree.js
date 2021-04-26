// Question One
function myName() {
    let firstName = 'Paschal';
    let lastName = 'Erhurun';
    console.log(firstName.concat(' ', lastName));
}
myName();

const favoriteFoods = ['pizza', 'ice cream'];


// Question Two
function randomFood() {
    let i = Math.floor(Math.random() * 2);
    if (i === 0) {
        console.log(favoriteFoods[0]);
    } else {
        console.log(favoriteFoods[1]);
    }
}

randomFood();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Question Three
function displayOddNumbers() {
    for(let i = 0; i < numbers.length; i++) {
        if(!(i % 2)) {
            console.log(numbers[i]);
        }
    }
}

displayOddNumbers();


// Question Four
function displayEvenNumbers() {
    for(let i = 0; i < numbers.length; i++) {
        if(i % 2) {
            console.log(numbers[i]);
        }
    }
}

displayEvenNumbers();


// Question Five
function returnFirstOddNumber() {
    let oddNum = [];
    for(let i = 0; i < numbers.length; i++) {
        if(!(i % 2)) {
            oddNum.push(numbers[i]);
        }
    }
    console.log(oddNum[0]);
}

returnFirstOddNumber();


// Question Six
function returnFirstEvenNumber() {
    let evenNum = [];
    for(let i = 0; i < numbers.length; i++) {
        if(i % 2) {
            evenNum.push(numbers[i]);
        }
    }
    console.log(evenNum[0]);
}

returnFirstEvenNumber();

// Question Seven
function returnFirstHalf() {
    let firstHalf = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i < numbers.length/2) {
            firstHalf.push(numbers[i]);
        }
    }
    console.log(firstHalf);
}

returnFirstHalf();


// Question Eight
function returnSecondHalf() {
    let secondHalf = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i >= numbers.length/2) {
            secondHalf.push(numbers[i]);
        }
    }
    console.log(secondHalf);
}

returnSecondHalf();