// function fn() {
//     console.log("Hello World");
// }

// const fnjs = function () {
//     console.log("Hello World");
// }

// const fnArrow = () => {
//     console.log("Hello World");
// }

// (
//     function () {
//         console.log("Hello World");
//     }
// )();

// //IIFE

// function outter() {
//     function fn() {
//         console.log("Hello From Inner Fn")
//     }
// }

// outter()
// let x = 0;

// for (let i = 1; i <= 5; i++) {
//     console.log("I : ", i)
// }

// console.log(i)


// function outter() {
//     function fn() {
//         console.log("Hello From Inner Fn")
//         return "true FROM FN"
//     }

//     return fn()
// }

// outter()


// function outter() {
//     function fn() {
//         console.log("Hello From Inner Fn")
//         return "true FROM FN"
//     }
//     return fn
// }

// outter()()


// function A() {
//     console.log("A");

//     return true
// }


// function B() {
//     console.log("B");
//     return A;
// }

// function C() {
//     console.log("C");
//     return B();
// }

// function D() {
//     console.log("D");
//     return C();
// }

// // console.log(D()()()())

// console.log(D()())


// function sum(a = 0, b = 0) {

//     console.log(arguments)

//     return a + b
// }

// console.log(sum(12, 13, 14));


function fact(n) {
    if (n == 0) {
        return 1
    }
    return n * fact(n - 1)
}

console.log(fact(599))