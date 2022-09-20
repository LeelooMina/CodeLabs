// Add two to every value of the array except to odd numbers.

function addTwoExceptToOddNumbers(numbers) {
  let returnArr:number[] = [];

  numbers.forEach(function (i:number) {
    if(i % 2 === 0){

      returnArr.push(i + 2);
    }
    else{
      returnArr.push(i);
    }
  });

  return returnArr;
}

console.log(addTwoExceptToOddNumbers([1,2,3,4,5])); // [1,4,3,6,5]
console.log(addTwoExceptToOddNumbers([101,1,4,10])); // [101,1,6,12]