/*// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

const plusFive = makePlusFunction(5)

plusFive(2)    ➞    7

plusFive(-8)    ➞    -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.

const plusTen = makePlusFunction(10)

plusTen(0)    ➞    10

plusTen(188)    ➞    198

plusFive(plusTen(0))    ➞    15
*/

function makePlusFunction(numAdd){
    return function(num){
        num += numAdd;
        return num;
    }
}

const plusFive = makePlusFunction(5);

console.log(plusFive(2));

console.log(plusFive(-8));

const plusTen = makePlusFunction(10);

console.log(plusTen(0));

console.log(plusTen(188));  

console.log((plusFive(plusTen(0))));
