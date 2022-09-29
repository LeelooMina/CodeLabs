/*
Exercise #2: Intermediate

Aim: Create an application that, on button click, runs a function that prints out a users name, age, and occupation

 Create the HTML with a button
 Create a function that takes in a user object
 Print each item in the user object out in a string to the console
 */

 let userInfo = { 
    name: "Crystal",
    age: 35,
    occupation: "Writer"

};

 let userIn = document.getElementById("user-info");



 
 function userPrint(userId){


    let userName = document.createElement('li');
    let userAge = document.createElement('li');
    let userOccu = document.createElement('li');

    userName.innerText  = userId.name;
    
    if (userName.innerText.length >= 5){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);

        userName.style.backgroundColor = `#${randomColor}`;
        userIn.appendChild(userName);

    }else{
    
    
        userIn.appendChild(userName);}

    userAge.innerText  = userId.age;
    userIn.appendChild(userAge);

    userOccu.innerText  = userId.occupation;
    userIn.appendChild(userOccu)
    
    console.log(userId.name);
    console.log(userId.age);
    console.log(userId.occupation);



    };


   



