function isInteger(num){
    if (num % 1 != 0){
        return false;
    } else {
        return true;
    }
}

console.log(isInteger(5));

console.log(isInteger(5.5));