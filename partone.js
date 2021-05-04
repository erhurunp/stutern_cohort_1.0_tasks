// Question One
function fibSequence(n){
    for(var fibArray = [0,1], i = 0, j = 1, k = 0; k < n; i = j, j = x, k++){
        x = i + j;
        fibArray.push(x);
    }
    console.log(fibArray);
}

fibSequence();



// Question Two
function factorial(n) {
    let answer = 0;
    if (n === 0) {return 1; }
    else { return n * factorial( n - 1 ); }
}

factorial();


