// Create a function that filters a list of users whose confirmation_email property is ONLY set to true. User the built in filter method to do just this.

// https://www.w3schools.com/jsref/jsref_filter.asp

let users = [
  {
    username: "John123",
    confirmation_email: true
  }, 
  {
    username: "Amy123",
    confirmation_email: false
  },
  {
    username: "Jamie123",
    confirmation_email: true
  }
]
// Expected result: let users = [ { username: "John123", confirmation_email: true }, { username: "Jamie123", confirmation_email: true } ]

let result = users.filter((user) => {
    return user.confirmation_email === true
});

console.log(result);
