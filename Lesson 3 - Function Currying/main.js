// Function currying - currying is a process in functional programming in which we transfrom a function with 
// mulitple arguments into a sequence of nesting functions that take one arguement at a time.

// eg: function f(a, b, c) is transformed to f(a)(b()(c)

function sum(a, b, c)  {
    return a + b + c
}

console.log(sum(2, 3, 5))

// we need to curry it from sum(2, 3, 5) to sum(2)(3)(5) - One argument at a time

function curry(fn) {
    return function(a) {
        return function(b) {
            return function(c) {
                return fn(a, b, c)
            }
        }
    }
}
const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)