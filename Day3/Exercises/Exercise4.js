/*Exercise #4: Function min(a, b)
Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a,b){
    if (a < b){
        return a;
    }else {
        return b;
    }
}

let num1 = prompt("Enter a number:");

let num2 = prompt("Enter a second number:");


console.log(min(num1,num2))
