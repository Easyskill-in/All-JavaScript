
function B() {
    console.log("Hello World From Function B");
}

function C() {
    console.log("Hello World From Function C");
}

function D() {
    console.log("Hello World From Function D");

}

// function A() {
//     console.log("Hello World From Function A");
//     C()
//     console.log("Ok")
//     D();
//     console.log("Done")
// }



// function num(n) {
//     if (n <= 0) {
//         return;
//     }
//     console.log(n)
//     num(n - 1)
//     console.log("Done By ", n)
// }

// num(5)

// function num(n) {
//     if (n <= 0) {
//         return;
//     }
//     console.log("waiting for ", n)
//     num(n - 1)
//     console.log(n)
// }


// num(10)

// function numA(n) {
//     if (n > 10) {
//         return;
//     }

//     console.log(n)
//     numA(n + 1)
// }


// numA(1)


// function sum(n) {
//     if (n <= 0) {
//         return 0;
//     }

//     return n + sum(n - 1)
// }

// sum(3)//6,1+2+3



// function A(n) {
//     return n * n
// }

// function B(n) {
//     return n / n
// }

// function C(n) {
//     return A(n) + B(n)
// }




function fact(num) {
    if (num <= 0) {
        return 1;
    }
    
    return num * fact(num - 1)
}