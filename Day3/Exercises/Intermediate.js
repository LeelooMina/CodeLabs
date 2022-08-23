/*
Exercise #2: Intermediate

Aim: Create an application that, on button click, runs a function that prints out a users name, age, and occupation

 Create the HTML with a button
 Create a function that takes in a user object
 Print each item in the user object out in a string to the console
 */

 function userPrint(userId){
console.log(userId.name);
console.log(userId.age);
console.log(userId.occupation);
 }

let userInfo = { 
    name: "Crystal",
    age: 35,
    occupation: "Writer"

};

