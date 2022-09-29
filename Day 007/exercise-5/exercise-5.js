// Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.

// Aim: Fix this code so it ultimately prints 'remembers me'.

function parent(x) {
  return function closure() {
    // Closure is declared here.
    return x;
  };
}

const remember = parent("remembers me");
// Seems like the variable x would be gone after
// parent is executed, but it's not.

//closure(); // WRONG, the global scope doesn't have access to its inner scopes and the closure method
// Returns "remembers me" because the inner
// function remembers x.

console.log(remember());