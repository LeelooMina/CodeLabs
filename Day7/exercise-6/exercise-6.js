// You will be given an array of drinks, with each drink being an object with two properties: name and price. Define a function with the parameter representing the array of drinks and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  {name: 'carrot', price: 34}
];


// The output of the sorted drinks object will be:

// Examples

// 

function sortDrinkByPrice(drinks){
    drinks.sort(((a, b) => (a.price - b.price)));
    return drinks;
}

console.log(sortDrinkByPrice(drinks));    // ->    [ {name: "lemonade", price: 50}, {name: 'carrot', price: 34}, {name: "lime", price: 10}]