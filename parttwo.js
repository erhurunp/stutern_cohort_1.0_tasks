var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// Question One
programming.languages.push('Go');

// Question Two
programming.difficulty = 7;

// Question Three
delete programming.jokes;

// Question Four
programming.isFun = true;

// Question Five
for (let i = 0; i < programming['languages'].length; i++) {
    console.log(programming['languages'][i]);
}

// Question Six
for(var key of Object.keys(programming)) {
    console.log(`${key}`);
}

// Question Seven
for(var key of Object.keys(programming)) {
    console.log(`${programming[key]}`);
}
// console.log(programming)