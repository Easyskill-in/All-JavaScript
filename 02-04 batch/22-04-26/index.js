const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = ['11', '21', '31', '41', '51', '61', '71', '81', '91', '101'];


const arr3 = [...arr1, ...arr2]

// const [a, b, c, d, e] = [...[...arr2, 12, 13,], 14];
const [a, b, c, d, ...e] = [...arr2];


// let a = arr2[0]
// let b = arr2[1]
// let c = arr2[2]
// let d = arr2[3]
// let e = arr2[4]


function sum(...a) {

    return a.reduce((a, v) => a + v)
}

//a,b,c,d,e....












// function greet(name) {
//     console.log("Hello ", name);

// }

// const arr = [1, true, "String", greet, [99, 45, 78, 23, [12, 45, [23, 78]]]]'


// let arr1 = [
//     [1, 2, 3],//0
//     [4, 5, 6],//1
//     [7, 8, 9],//2
// ]
// let arr2 = [
//     [81, 42, 73],//0
//     [24, 55, 36],//1
//     [17, 98, 90],//2
// ]

// arr.forEach((value, index) => {
//     arr[index] = value.reduce((acc, value) => acc + value)
// })

// let sum = arr.reduce((acc, value) => acc + value)


//arr1+arr2