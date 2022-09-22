let list = [
    {
      id: 1, 
      completed: true,
      action: "Study"
    },
    {
      id: 2,
      completed: false, 
      action: "Dishes"
    }
  ]

  let el = document.getElementById("objAppear");

  for(i of list){
    let listShow = document.createElement('p');
    // listShow.innerHTML = list[i].id + list[i].completed + list[i].action;
    // document.appendChild(listShow);
    console.log(list.id[i])
  }

