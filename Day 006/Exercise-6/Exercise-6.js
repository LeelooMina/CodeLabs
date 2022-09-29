/* EExercise #6: Add all multiplied paired numbers

Aim: Create a function that takes three collections of arguments and returns the sum of the product of the grouped numbers.

Examples

product([[1,2],[1,1],[2,3]])    ➞    9
// 1 * 2 + 1 * 1 + 2 * 3

product([[10,2],[5,0],[2,3]])    ➞    26
// 10 * 2 + 5 * 0 + 2 * 3

product([[1,2],[2,3],[3,4]])   ➞    20
// 1 * 2 + 2 * 3 + 3 * 4

product([[1,2],[0,3],[3,0]])    ➞    2
// 1 * 2 + 0 * 3 + 3 * 0 */


function multiplyNums(arNum){
    let sum = arNum[0] * arNum[1];

    return sum;

}

function product(arNum1, arNum2, arNum3){

    let sum1 = multiplyNums(arNum1);

    let sum2 = multiplyNums(arNum2);

    let sum3 = multiplyNums(arNum3);

    return sum1 + sum2 + sum3;



}


console.log(product([1,2],[1,1],[2,3]))   //   9
// 1 * 2 + 1 * 1 + 2 * 3//

console.log(product([10,2],[5,0],[2,3]))  //    26
// 10 * 2 + 5 * 0 + 2 * 3//

console.log(product([1,2],[2,3],[3,4]))   //  20
// 1 * 2 + 2 * 3 + 3 * 4//

console.log(product([1,2],[0,3],[3,0]))   //   2
// 1 * 2 + 0 * 3 + 3 * 0 */