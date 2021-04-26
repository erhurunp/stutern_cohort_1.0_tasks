// printDay function
function printDay(day) {
    switch (day) {
        case 1:
            console.log('Sunday');
            break;
        case 2:
            console.log('Monday');
            break;
        case 3:
            console.log('Tuesday');
            break;
        case 4:
            console.log('Wednesday');
            break;
        case 5:
            console.log('Thursday');
            break;
        case 6:
            console.log('Friay');
            break;
        case 7:
            console.log('Saturday');
            break;
        default:
            console.log(undefined);
            break;
    }
}

printDay();

// lastElement function
function lastElement(array = []) {
    if (array && array.length > 0) {
        console.log(array[array.length - 1]);
    } else {
        console.log(undefined);
    }
}

lastElement();


// numberCompare function
function numberCompare(a, b) {
    if (a > b) {
        console.log('First is greater');
    } else if(a < b) {
        console.log('Second is greater')
    } else {
        console.log('Numbers are equal');
    }
}

numberCompare();


// singleLetterCount function
function singleLetterCount(word = 'rule', letter = 'r') {
    word = word.toLowerCase();
    letter = letter.toLowerCase();

    let count = 0;
    
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === letter) {
            count += 1;
        }
    }

    console.log(count);
    return count;
}

singleLetterCount();


// multipleLetterCount function
function multipleLetterCount(word = 'telephone') {
    let occurrence = {};
    for (let i = 0; i < word.length; i++) {
        let letter = word.charAt(i);
        if (occurrence[letter]) {
           occurrence[letter]++;
        } else {
           occurrence[letter] = 1;
        }
    }

    console.log(occurrence);
    return occurrence;
};

multipleLetterCount();


// arrayManipulation
function arrayManipulation(array = [1, 2, 3], command = '', location ='', value) {
    command = command.toLowerCase();
    location = location.toLowerCase();
    let removedItem;

    if (command === 'remove' && location === 'beginning') {
        removedItem = array.shift();
        console.log(`The removed item is ${removedItem}`)
    } else if (command === 'remove' && location === 'end') {
        removedItem = array.pop();
        console.log(`The removed item is ${removedItem}`)
    } else if (command === 'add' && location === 'beginning') {
        array.unshift(value);
    } else if (command === 'add' && location === 'end') {
        array.push(value);
    } else {
        console.log('There was no mutataion on this array');
    }
        
    
    console.log(array);
    return array;
}

arrayManipulation();


// isPalindrome function
function isPalindrome(str = 'no') {
    var check = str.replace(/[\W_]/g, '').toLowerCase();
    var strReverse = check.split('').reverse().join('');
    
     if(strReverse === check){
       console.log(true);
     }else {
       console.log(false);
     }
     
     
}



isPalindrome();