// let num = 273522334;
// let temp = num;
// let evensum = 0;
// let oddsum = 0;

// let countEven = 0;
// let countOdd = 0;

// while (num != 0) {
//     // console.log(num)
//     const rem = num % 10;

//     if (rem % 2 === 0) {
//         evensum += rem

//         countEven++;
//     } else {

//         oddsum += rem
//         countOdd++;
//     }

//     num = parseInt(num / 10)
// }

// function function_name() {
//     console.log("Hello From First JS UDF Function")
// }



function sum(a, b) {
    // let a = Number(prompt("Enter First Number"))
    // let b = Number(prompt("Enter First Number"))
    // console.log("The Sum of ", a, "And", b, " is : ", a + b)
    console.log(`The Sum of ${a} and ${b} is ${a + b}`)

    return a + b;
}

let ans = sum(2, 3)
