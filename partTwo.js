var people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    // Question one
}

people.shift(); // Removes Greg - Question two

people.pop(); // Removes James - Question three

people.unshift("Matt"); // Adds Matt - Question four

people.push("Paschal"); // Adds my name - Question five

for (let i = 0; i < 2; i++) {
    console.log(people[i]);
    // Question six
}

let newPeople = people.slice(1); // Question seven

people.indexOf("Mary");  //indexOf for Mary - Question eight
newPeople.indexOf("Mary");

people.indexOf("Foo");  //indexOf for Foo - Question nine
newPeople.indexOf("Foo");

// Question ten
var people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1, "Elizabeth", "Artie");

// Question eleven
var withBob = people.concat("Bob");

console.log(withBob);