// Given the empty array.

// let numbers = [];
// Push numbers 0 - 50 into this array. Use the push method to do this.
// Hint. Using a loop will be a good use case in this scenario.
// Use the built in array method filter to filter out even numbers of the array.

// From there, add each and every number from the array.


let numbers = [];

for(i = 0; i <= 50; i++){
    numbers.push(i);
}

//console.log(numbers);



oddNumbs = numbers.filter((n) => n % 2 == 1);

console.log(oddNumbs);

console.log(numbers.reduce((sum, a) => sum + a));
