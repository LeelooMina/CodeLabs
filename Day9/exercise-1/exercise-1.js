// You are a confident(perhaps cocky) waiter. You think you can write down all the information down from the top of your head.

// Given the array of orders. Log each order onto the console by defining the logic in a function called reciteMyOrders.

const orders = [
  {
    order: "Nachos with Cheese",
    name: "Sandy",
    price: "$13.99",
  },
  {
    order: "Chile Relleno, Burrito, & Rice",
    name: "John",
    price: "$13.99",
  },
  {
    order: "Flauta, Chicken Quesadilla, & Taco",
    name: "Amy",
    price: "$13.99",
  },
];

function reciteMyOrders(customerOrders) {
//   console.table(customerOrders);

  customerOrders.forEach(element => {
    console.log(element.order)
    
  });

  //console.log(customerOrders[0].order);

}

reciteMyOrders(orders);

// Nachos with Cheese
// Chile Relleno, Burrito, & Rice
// Flauta, Chicken Quesadilla, & Taco