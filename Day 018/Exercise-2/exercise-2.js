function kmToMi () {
   let km = document.getElementById("userInput").value
   let result = km * 0.62137;
  
   document.getElementById("conversion").innerText(`${result}`)
}


console.log(kmToMi(50));
