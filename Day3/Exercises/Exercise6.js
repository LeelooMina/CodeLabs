/*
Exercise #6a: Even and Odd
Loop through numbers 0 - 100. When a number is even, print for example 0 is an even number. Otherwise print for example, 1 is an odd number.

*/
/*
Exercise #6b: Prime numbers
To add onto #6a, if a number is a prime number, print for example 1 is a prime number.
*/



    for(i = 0; i <= 100; i++){
        if(i % 2 === 0){
            console.log(`${i} is even!`);
        }else {
            if(isPrime(i)){
                console.log(`${i} is a prime number.`)
            }
            console.log(`${i} is odd!`);
        }
    }

    function isPrime(num) {
        if(num < 2){
            return false;
        }

        for (var i = 2; i < num; i++) {
            if(num%i === 0)
                return false;
        }

        return true;
    }


