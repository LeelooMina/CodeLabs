//Use setTimeout to append a red 200px by 200x onto the body of a webpage every half second.

let showRedBlock = document.getElementById('showBlock');

function addBlock(){
let redBlock = document.createElement('div');

redBlock.style.backgroundColor = 'red';
redBlock.style.width = '200px';
redBlock.style.height = '200px';

showRedBlock.appendChild(redBlock);
}
//setTimout only executes once, used setInterva() instead
setInterval(addBlock, "500");

