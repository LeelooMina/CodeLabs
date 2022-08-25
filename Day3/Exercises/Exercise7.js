/*
Exercise #7: Creating a Modal
Create a button and once clicked, the user will see a modal with the message "Here's another annoying pop up!". The modal should also include a button that will allow the user to click out.
*/

let modal = document.getElementById("popModal");

let openBtn = document.getElementById("openModal");

let closeBtn = document.getElementById("closeModal");

// Open popup when user clicks openBtn
openBtn.onclick = function() {
  modal.style.display = "block";
}

// Close pop up when user clicks closeBtn
closeBtn.onclick = function() {
  modal.style.display = "none";
}

