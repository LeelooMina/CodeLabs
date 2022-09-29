/*
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

function pow(x,n){
    let powResult = 1;

    for(i = 1; i <= n; i++){
        powResult = powResult * x;
    }

    return powResult;
}


console.log(pow(3,2));
console.log(pow(3,3));
console.log(pow(1,100));
