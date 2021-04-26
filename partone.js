// Question One
const newObject = {
    firstName: 'Paschal',
    lastName: 'Erhurun',
    occupation: 'Science Educator'
};

// Question Two
    // Accessing firstName
        console.log(newObject.firstName);
        console.log(newObject['firstName']);
    // Accessing lastName
        console.log(newObject.lastName);
        console.log(newObject['lastName']);
    // Accessing occupation
        console.log(newObject.occupation);
        console.log(newObject['occupation']);

//  Question Three
    // Adding the hobby key
        newObject.hobby = 'anime';
    // Removing the occupation key
        delete newObject.occupation;

// Question Four
/*
Dot notation is faster to write and clearer to read. Square bracket notation allows access to properties containing special characters and selection of properties using variables.
*/

// Question Five
var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
};

for(var key of Object.keys(namesAndHobbies)) {
    console.log(`${key} => ${namesAndHobbies[key]}`);
}

// Question Six
namesAndHobbies.paschal = 'watching anime';

// Question Seven
for(var key of Object.keys(namesAndHobbies)) {
    if (key === 'paschal') {
        console.log(`${key} => ${namesAndHobbies['paschal']}`);
    }
}


