// Question One
let phrase = 'Hello';

if(true){
    let user = 'John';

    function sayHi() {
        console.log(`${phrase}, ${user}`)
    }
}

sayHi();    // Hello, John


// Question Two
function makeArmy() {
    let shooters = [];

    for(let i = 0; i < 10; i++) {
        let shooter = function() {
            return i;
        };
        shooters.push(shooter);
    }

    return shooters;
}
  
let army = makeArmy();
  
console.log(army[0]());
  