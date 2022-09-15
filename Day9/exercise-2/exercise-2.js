
const dogButton = document.getElementById('dogBtn');

dogButton.addEventListener('click', fetcDogPhoto)

let showDog = document.getElementById('showDog');


function fetcDogPhoto(event) {
    event.preventDefault();
   
    fetch(
      `https://dog.ceo/api/breeds/image/random`
    ).then((resp)=>{
      return resp.json();
    }).then((dogPhoto)=>{
      console.log(dogPhoto);

      if(document.getElementById('dogSrc') === null){
      
      let imgDog = document.createElement('img');

      imgDog.setAttribute('id', 'dogSrc');

      imgDog.src = dogPhoto.message;

      showDog.appendChild(imgDog)
      } else {
        let imgDog = document.getElementById('dogSrc');
        imgDog.src = dogPhoto.message;
      }
  
  })
  }