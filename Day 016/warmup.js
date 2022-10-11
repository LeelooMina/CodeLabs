// Given numbers 0 - 100;

// For every number that is a multiple of 3, log to the console "Fizz". For every number that is a multiple of 5, log to the console "Buzz". For every number that is a multiple of 5 and 3, log to the console "Fizz Buzz".

for(let i = 0; i <=100; i++){
    if(i <= 0){
        console.log(i);
    }
    else if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }
     else if(i % 3 === 0){
        console.log(`Fizz`);
    } 
    else if(i % 5 === 0){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }

}
