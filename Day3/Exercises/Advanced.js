/* 
Exercise #3: Advanced

Aim: Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically and their corresponding values in the same order.

Examples

keysAndValues({ a: 1, b: 2, c: 3 })
   ➞    [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
   ➞    [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
   ➞    [["key1", "key2", "key3"], [true, false, undefined]]
*/

function keysAndValues(obj){
    
    let key = Object.keys(obj);
    let value = Object.values(obj);

    key.sort();
    value.sort();


    console.log("Keys: " + key);
    console.log("Values: " + value);
}

keysAndValues({ a: 1, b: 2, c: 3 });

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });

keysAndValues({ key1: true, key2: false, key3: undefined });