console.log("Hello, World!");



// const x = setTimeout(() => {
//     console.log("This message is delayed by 2 seconds.");
// }, 2000)


console.log("BOLO, World!");

// setTimeout(() => {
//     clearTimeout(x)
//     console.log("Second Time Out")
// }, 2000)

// const x = setInterval(() => {
//     console.log("First Interval Out")
// }, 2000)



const body = document.body;

const arr = ["blue", "red", "pink", "green", "yellow", "black", "gray", "white", "lightblue"]

// let i = 0
// setInterval(() => {
//     body.style.backgroundColor = arr[i]
//     i++
//     if (i > arr.length - 1) {
//         i = 0
//     }
// }, 1000)

setInterval(() => {
    let x = Math.floor(Math.random() * arr.length)
    // console.log(x)
    body.style.backgroundColor = arr[x]

}, 1000)