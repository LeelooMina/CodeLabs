/* Exercise #7: Verify if a number is a prime number. */

function isPrime(num) {
    
    if(num === 0 || num === 1){
      return false;
    }

    for (let i = 2; i < num; i++) {
        if(num % i === 0){
        return false;
        }
    }

return true;
}

console.log(isPrime(10));

console.log(isPrime(5));

console.log(isPrime(77));

console.log(isPrime(17));