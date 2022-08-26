
//Function takes in array. Checks if array contains string "Waldo." Replaces "Waldo" with "Found Waldo!". Returns changed array.
function findWaldo(group) {

    let waldo = group.indexOf('Waldo');

   
    if (waldo === -1){
      return group;
    }else{

      for(let i = 0; i < group.length; i++){
        if (group[i] === 'Waldo'){
        group.splice(i, 1, 'Found Waldo!');
       
        }
      }
    }

    return group;
  }



console.log(findWaldo(['Stacy', 'Waldo', 'John'])); // returns ['Stacy', 'Found Waldo!', 'John']
console.log(findWaldo(['Waldo', 'Jimmy', 'James', 'Jamie', 'Waldo'])); // ['Found Waldo!', 'Jimmy', 'James', 'Jamie', 'Found Waldo!']

console.log(findWaldo([ 'Jimmy', 'James', 'Jamie'])); // ['Jimmy', 'James', 'Jamie']

