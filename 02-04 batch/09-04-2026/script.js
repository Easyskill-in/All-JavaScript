// function sum(a, b) {
//     return a + b;
// }

// function pow(num) {
//     return num ** 2;
// }

// const a = pow(3)
// const b = sum(3, 5)
// const c = sum(12, pow(2))
// const d = sum(12, pow(sum(2, pow(3))))


function sum(a, b) {
    console.log("Sum Function");

    return a + b
}

function pow(num) {
    return num ** 2
}

const a = sum;
const b = pow;

function fn(cb) {
    console.log("FN :", cb);
    console.log(cb(12))
}

// fn(12)
fn(pow)