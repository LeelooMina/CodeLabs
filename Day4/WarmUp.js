

function findWaldo(group) {

    for(i = 0; i <= group.length; i++){

    if(group[i] === "Waldo"){
        group[i] = "Found Waldo!";
    }}
  
}

let testVar = findWaldo(['Stacy', 'Waldo', 'John']);
console.log(testVar); // returns ['Stacy', 'Found Waldo!', 'John']
findWaldo(['Waldo', 'Jimmy', 'James', 'Jamie', 'Waldo']) // ['Found Waldo!', 'Jimmy', 'James', 'Jamie', 'Found Waldo!']