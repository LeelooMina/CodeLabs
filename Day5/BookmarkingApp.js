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
        //let b = document.getElementById("displayBookm");
        let addBook = document.createElement('p');
        addBook.innerText = bmarkList[i];
        let displayBooks = document.getElementById("displayBookm");
        displayBooks.appendChild(addBook);
        
    }

}

//for( ){
 
//}

//save to local storage



//display saved bookmarks

//delete all





///getBookmark();




