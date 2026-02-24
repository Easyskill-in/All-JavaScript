// function Name() {
//     console.log("Hello Function")
//     return true
// }

// const newName = Name

// Name()
// newName()

// function fn() {
//     console.log("Hello From FN ");
//     return Name;
// }

// function fn1() {
//     console.log("Hello From FN1 ");
//     return fn;
// }

// let k = fn1()()
// let k = fn()()

/*
let value = Name
undefined
Name
ƒ Name() {
    console.log("Hello Function")
    return true
}
value
ƒ Name() {
    console.log("Hello Function")
    return true
}
Name()
script.js:2 Hello Function
true
value()
script.js:2 Hello Function
true
*/


// function fn() {
//     console.log("FN Function");
// }

// let a = [1, 2, 3, 4, fn]

function sum(a, b) {
    return a + b;
}

function fn(cb) {
    console.log(cb);
}

fn(sum)

// fn(sum(12, sum(12, 5)))