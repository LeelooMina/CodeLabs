function arrayOfMultiples(num, length){
    let arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(num * i);
  }
  return arr;
}

console.log(arrayOfMultiples(7, 5));

