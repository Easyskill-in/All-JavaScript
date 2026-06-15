// console.log("Hello Js")
// console.log("Hello Js1")
// let a = 1;
// try {
//     console.log(a.hello.hii)
// } catch (error) {
//     console.log(error)
// } finally {
//     console.log("finally")
// }
// console.log("Hello Js2")
// console.log("Hello Js3")


// const name = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Data")
//         // reject("Error Message")
//     }, 4000)
// })

// name.then((data) => {
//     console.log(data)
// })

// name.catch((error) => {
//     console.log(error)
// })

// console.log("Hello")


// name.then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })


// function fn(data) {
//     return new Promise((resolve, reject) => {
//         resolve(data)
//     })
// }



// const name = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data")
//     }, 2000)
// })
// name.then((data) => {
//     console.log({ data })
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data + " " + "Easyskill")
//         }, 3000)
//     })
// }).then((data) => {
//     console.log({ data })
// }).catch((error) => {
//     console.log(error)
// })




// let x = name.then((data) => {
//     console.log({ data })
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data + " " + "Easyskill")
//         }, 3000)
//     })
// })

// x.then((data) => {
//     console.log({ data })
// })

// const result = fetch("https://fakestoreapi.com/products")

// result.then((data) => {
//     console.log(data)
//     return data.json()
// }).then((value) => {
//     console.log(value)
// }).catch((error) => {
//     console.log(error)
// })