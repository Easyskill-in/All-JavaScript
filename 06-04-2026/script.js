// console.log("Hello World");

// setTimeout(() => {
//     console.log("This is a message after 2 seconds");
// }, 2000);

// console.log("Hii");

// const ans = fetch("https://jsonplaceholder.typicode.com/todos/1")
// let x;
// const A = new Promise((res, rej) => {
//     setTimeout(() => {
//         x = [1, 2, 3, 4, 5]
//         rej("Me Nahi Aa RAHA ")
//     }, 2000)
// })

// console.log(x)
// console.log("Hii 1")
// let num = 12;
// const A = new Promise((res, rej) => {
//     let data = " me Aaa RAHA HOOO"
//     res(new Promise((res, rej) => {
//         setTimeout(() => {
//             if (num % 2 == 0) {
//                 res("EVEN", data)
//             } else {
//                 rej("ODD")
//             }
//         }, 2000)
//     }))

// })


// A.then((data) => {
//     console.log("This is the data from A", data)
// })

// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => {
//         return res.json()
//     }).then((data) => {
//         console.log("This is the data from API", data)
//     }).catch((err) => {
//         console.log("This is the error from API", err)
//     })

// async function getData() {
//     const JSONVALADATA = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const DATA = await JSONVALADATA.json()
//     console.log("DATA : ", DATA)
// }