// function changeColor(){
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = `#${randomColor}`;
//     changeFontColor();

// }

function bgToBlue(){
   
    document.body.style.backgroundColor = "lightblue";

}

function colorPick(){
    let colorPick = document.getElementById("changeColor");
    document.body.style.backgroundColor = colorPick.value;
}