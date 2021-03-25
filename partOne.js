// Question one
const favoriteFoods = ['Yam', 'Fried Plantain with fried eggs', 'Rice', 'Amala'];

// Question two
favoriteFoods[1];

// Question three
favoriteFoods[favoriteFoods.length -1] = 'Banga Soup';

// Question four
let formerFavoriteFood = favoriteFoods.shift();

// Question five
favoriteFoods.push('Vegetable soup');

// Question six
favoriteFoods.unshift('Moimoi');

// Question seven
const myArray = [];
console.log(myArray.pop());
// popping an empty array returns an undefined value

// Question eight
const firstArray = [2, 3, 4, 5]
const secondArray = firstArray.splice(1, 1);

const firstRadiations = ["alpha", "gamma", "delta"];
firstRadiations.splice(1, 0, "beta");

const numbers = [10, -10, -5, -3, 2, 1];
numbers.splice(1,3,9,8,7,6,5,4,3);
