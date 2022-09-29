// Given the variable.

// let name = "Amy";
// Define a function called updateNames with one parameter. This function will replace the name John with the given parameter.

function updateNames(name) {
  let sentence = "Hello, my name is John. My friend's name is also John.";
  
  sentence = sentence.replace("John", name);
  sentence = sentence.replace("John", name);

  return sentence;
}

console.log(updateNames("Amy")); // "Hello, my name is Amy. My friend's name is also Amy."
