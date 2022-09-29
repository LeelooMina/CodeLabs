function arrayOfMultiples1(num1, length) {
    var arrNum = [];
    var pushArr;
    for (var i = 0; 0 <= length; i++) {
        pushArr = num1 * i;
        arrNum.push(pushArr);
    }
    return arrNum;
}
console.log(arrayOfMultiples1(7, 5)); //    ➞    [7, 14, 21, 28, 35]
console.log(arrayOfMultiples1(12, 10)); // ➞    [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples1(17, 6));
