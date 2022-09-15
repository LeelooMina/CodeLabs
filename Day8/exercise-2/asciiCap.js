/*Aim: Create a function that takes a string as input, capitalizes a letter if its ASCII code is even, and returns its lower case version if its ASCII code is odd.

Examples

asciiCapitalize("to be or not to be!")    ➞    "To Be oR NoT To Be!"

asciiCapitalize("THE LITTLE MERMAID")    ➞    "THe LiTTLe meRmaiD"

asciiCapitalize("Oh what a beautiful morning.")    ➞    "oH wHaT a BeauTiFuL moRNiNg."*/

function asciiCapitalize(string){
    
    let returnVal = capOrNot(string);
    return returnVal;
    
}

function capOrNot(test){
    let returnString = ""

    for(i = 0; i < test.length; i++){
        if (test.charCodeAt(i) % 2 === 0){
            returnString += test[i].toUpperCase();
        }
    else{
            returnString += test[i].toLowerCase();
        }
    
    }

    return returnString;

}

console.log(asciiCapitalize("to be or not to be!"));

console.log(asciiCapitalize("THE LITTLE MERMAID"));

console.log(asciiCapitalize("Oh what a beautiful morning."));