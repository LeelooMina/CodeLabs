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

  //let el = document.getElementById("objAppear");

  for(let i = 0; i < list.length; i++){
    let fullTodo = `Id: ${list[i].id}, 
                    Completed: ${list[i].completed},
                    Action: ${list[i].action}`
                    
    document.body.innerHTML = <p>${fullTodo}</p>
  }

