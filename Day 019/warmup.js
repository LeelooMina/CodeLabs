
// Print all duplicate elements of an array





function printDuplicates(arr) {
    let results = [];



    for(i = 0; i < arr.length; i++ ){

        console.log(arr[i]);
        for(i = 0; i < arr.length; i++ ){
            if (arr[i + 1] == arr[i]){
            results.push(arr[i+1]);
           
            }
    }}

    console.log(results);


}



let numbers = [1, 1, 5, 3, 7, 9, 10, 4, 3, 1];

printDuplicates(numbers); // [1,3]

let characters = ["C", "$", "C", "1", "2", "3", "*", "%", "C", "*"];

printDuplicates(characters); // [C, *]
