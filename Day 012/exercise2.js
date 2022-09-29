//Given the variable

let sentence = "My name is John!";

// Define a function called reverse with one parameter. This function will reverse the string. You cannot use any built in methods to do this. Use a loop.

function reverse(str) {
    let newString = "";
    
    for (i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    
    return newString;
  }
  
  console.log(reverse(sentence)); // "!nhoJ si eman yM"
