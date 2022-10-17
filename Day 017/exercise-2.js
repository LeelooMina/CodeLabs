// Given two strings. One string representing a name. The second string representing a sentence.

// Return the count of how many times the name appears in the sentence.

function nameCount(name, sentence){

//     let count = sentence.match(/${name}/g);
//    console.log(count)

let words = sentence.split(" ");
let count = 0;

let names = words.filter(element => element.includes(name));

count = names.length;

console.log(count)

}

let person = "John";
let announcement = "Congratulations John! John is a yoga master since the beginning of next week. A lot of last week began when John was only a banana. Trees from nectarines became apparent when he began mastering the weather"

nameCount(person, announcement); // 3
