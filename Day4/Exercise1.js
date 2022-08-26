//Exercise #1: Basic

//Aim: Create a button that changes the background and text color randomly when clicked



document.body.style.backgroundColor;



function changeColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    changeFontColor();

}

function changeFontColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.color = `#${randomColor}`;
}