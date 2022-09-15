// How would you find the greatest common divisor of two numbers?

function greatestCommonDivisor(a, b){
    let commonDiv = 0;
    for (i = 0; i <= a && i <= b; i++){
        if( a % i === 0 && b % i === 0){
            commonDiv = i;
        }

    }
    return commonDiv;
}

console.log(greatestCommonDivisor(14, 21)); // returns 7
console.log(greatestCommonDivisor(69, 169)); // returns 1