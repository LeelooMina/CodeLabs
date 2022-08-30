//Get user input

const btnSubmit = document.getElementById('submit');
let bookmarks = [];

//localStorage.getItem('bookmarks');

btnSubmit.addEventListener("click", getBookmark);

function getBookmark(){
    
    let bookMk = document.getElementById('bookmarkTx').value;
    bookmarks.push(bookMk);
    showBookmarks(bookmarks);

console.log(bookmarks);
    //return bookMk;

}

//append to body
function showBookmarks(bmarkList){
    for(i = 0; i <= bmarkList.length; i++){
        b = document.getElementById("displayBookm");
        b.createElement('p');
        b.innerText = "ha ha"
        document.body.appendChild(b);
        
    }

}


//for( ){

//}

//save to local storage



//display saved bookmarks

//delete all





///getBookmark();




