// Aim: Write a function redundantReturn that takes in a string str as a parameter and returns a function that returns this parameter.

function redundantReturn(str){
    return function () {
        return str;
    }
}