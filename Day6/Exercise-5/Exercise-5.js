/* Exercise #5: Range

Aim: Write a function that returns an array containing all the numbers inclusive to that range given the start and end values. See examples below.

Examples

reversibleInclusiveList(1, 5)    ➞    [1, 2, 3, 4, 5]

reversibleInclusiveList(2, 8)    ➞    [2, 3, 4, 5, 6, 7, 8]

reversibleInclusiveList(10, 20)    ➞   [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

reversibleInclusiveList(24, 17)    ➞   [24, 23, 22, 21, 20, 19, 18, 17]
Notes

The resulting array's sort order is dependent on the input values.
All inputs provided in the test scenarios are valid.
If the start is greater than the end, return a descendingly sorted array; otherwise, ascendingly sorted. */

function reversibleInclusiveList(num1, num2){
    let returnArr = [];

    if(num1 < num2){
        for (i = num1; i <= num2; i++){
            returnArr.push(i);
        }
     } else{
        for (i = num1; i >= num2; i--){
            returnArr.push(i);
        }

    }

    return returnArr;

    
}

console.log()

console.log(reversibleInclusiveList(1, 5));    //[1, 2, 3, 4, 5]

console.log(reversibleInclusiveList(2, 8));   // [2, 3, 4, 5, 6, 7, 8]

console.log(reversibleInclusiveList(10, 20));    // [10, 11, 12, 13, 14, 15, 16, 17, 18, 1

console.log(reversibleInclusiveList(24, 17));   // [24, 23, 22, 21, 20, 19, 18, 17]