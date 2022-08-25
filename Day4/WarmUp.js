

function findWaldo(group) {
    let newArr = [];
    for(i = 0; i < group.length; i++){

    if(group[i] === 'Waldo'){
        group[i] = "Found Waldo!";
        //newArr.push(group[i]);
    

  return group; }
}


console.log(findWaldo(['Stacy', 'Waldo', 'John']);); // returns ['Stacy', 'Found Waldo!', 'John']
findWaldo(['Waldo', 'Jimmy', 'James', 'Jamie', 'Waldo']) // ['Found Waldo!', 'Jimmy', 'James', 'Jamie', 'Found Waldo!']