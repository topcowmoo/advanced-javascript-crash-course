// Nested Function Scope

let a = 10
function outer () {
    let b = 20
    function inner () {
       let c = 30
       console.log(a, b, c)
    }
    inner()
}
outer()

// JavaScript check if c is defined in the inner function-it is so its value 30 is logged in the console
// Next it looks for b in the inner function scope-is is NOT so it goes up one level and checks the outer function
// It is present in the outer function so 20 is logged in the console. JS checks if variable a is in the inner function
// It's not so it checks the outer scope but it isnt there either. It moves one more level up to the global scope
// and checks there  and it is and the value of 10 is logged in the console.

// in nested functions JS varibale lookup starts with the innermost function where we are trying to access the variable
// and moves outward until it reaches the global scope.
