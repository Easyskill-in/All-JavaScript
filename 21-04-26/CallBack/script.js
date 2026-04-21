// function getdata(maggie, callback) {
//     setTimeout(() => {
//         console.log("maggie :", maggie);
//         if (callback) {
//             callback()
//         }
//     }, 2000)
// }


// getdata("hotwater", () => {
//     getdata("maggie", () => {
//         getdata("salt", () => {
//             getdata("maggie is ready");
//         })
//     })
// })





// function getData(id, callback) {
//     setTimeout(() => {
//         console.log("Data : ", id)

//         if (callback) {
//             callback()
//         }
//     }, 2000)
// }

// getData(12, () => {
//     // sum(10, 20)
//     getData(63, () => {
//         getData(99, () => {
//             sum(10, 20)
//         })
//     })
// })


// function sum(a, b) {
//     setTimeout(() => {
//         console.log("sum : ", a + b)
//     }, 3000)
// }
// // getData(63)
// // getData(99)


// const Data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Success");
//         // resolve("Done")
//         reject("Fail")
//     }, 3000)
// })


// Data.then((data) => {
//     console.log("Hello JavaScript", data)
// })
// Data.catch((error) => {
//     console.log("Hello JavaScript Error : ", error)
// })


// Data.then((data) => {
//     console.log("Hello JavaScript", data)
// }).catch((error)=>{
//     console.log("Hello JavaScript Error : ", error)
// })


function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Id :", id)
            resolve(id)
        }, 4000)
    })
}


// getData(12).then(() => {
//     getData(63).then(() => {
//         getData(78)
//     })
// })

getData(12).then(() => {
    return getData(63)
}).then(() => {
    return getData(99)
}).then(() => {
    console.log("Success")
})

// fetch()