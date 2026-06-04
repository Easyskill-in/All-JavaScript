// function add(a, b) {
//     console.log("Hello From Add Function")
//     return a + b;
// }


// let x = add

// console.log(x(89, 78))


// function fn(cb) {
//     return cb
// }

// function pow(num) {
//     return num * num
// }

// const data = fn(pow)(4);


function A(n) {
    console.log("A Function")
    return n;
}

function B() {
    console.log("B Function")
    return A;
}

function C() {
    console.log("C Function")

    return B;
}
function D() {
    console.log("D Function")
    return C;
}


console.log(D()()()(C)()()(B()(99)))