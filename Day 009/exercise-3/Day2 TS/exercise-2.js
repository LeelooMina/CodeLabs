// Exercise #2: Intermediate
// Aim: Dynamically display a list of food items and prices using HTML & JavaScript
//  Create a LIST of OBJECTS, each object having a name and price property
//  LOOP over that LIST, dynamically create a new list item <li></li> with the food name inside, and append that item to an existing HTML <ul></ul> element
function changeColor() {
    var elm = document.querySelector('h1');
    if (elm !== null) {
        elm.style.color = "green";
    }
}
function changeColorButton() {
    var elm2 = document.querySelector('h2');
    if (elm2 !== null) {
        elm2.style.color = "green";
    }
}
