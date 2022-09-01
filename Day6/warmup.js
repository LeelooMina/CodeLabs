function countTo(num){
    console.log('Counting');
    for(i=0; i <= num; i++){
        console.log(i);
    }
}

countTo(5);

countTo(10);

function countEven(num){
    console.log('Even');
    for(i=0; i <= num; i++){
        if(i % 2 === 0)
        console.log(i);
    }
}

countEven(10);

function countOdd(num){
    console.log('Odd');
    for(i=0; i <= num; i++){
        if(i % 2 != 0)
        console.log(i);
    }
}

countOdd(10);

function countPrime(num){
    console.log('Prime');

    for(i = 0; i <= num; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
        
    }



function isPrime(num) {
    
        if(num < 2){
            return false;
        }
    
        for (var i = 2; i < num; i++) {
            if(num % i === 0){
            return false;
            }
        }

    return true;
}

countPrime(10);