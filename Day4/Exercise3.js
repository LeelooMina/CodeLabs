let date = new Date();

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

//Change 24 hours to 12 - does not check if time is in 24 hour format

function fixHours(num){
    num = num - 12;
    return num;
}

console.log(fixHours(14));