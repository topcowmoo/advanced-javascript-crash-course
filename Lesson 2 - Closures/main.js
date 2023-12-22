// Closure - A closure is the combination of a function bundled together with references to its
// surrounding state. Closures are created every time a function is created at function creation time.
// Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function. 
// Lexical scoping is the process used to define the scope of a variable by its position in the source code.

function outer () {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    inner()
}
outer()
outer()


function outer () {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    return inner
}
const fn = outer()
fn()
fn()
