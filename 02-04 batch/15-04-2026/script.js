// console.log("Hii")
// const Value2 = setTimeout(() => {
//     console.log("Hello World")
// }, 5000)
// console.log("Byye")

// const Value1 = setInterval(() => {
//     console.log("Hello Interval")
// }, 2000)


// function getData(id, callback) {

//     console.log("Fetching Data From Database.....")
//     setTimeout(() => {
//         console.log(id)
//         if (callback) {
//             callback()
//         } else {
//             console.log("Stop")
//         }
//     }, 2000)
// }

// getData(100, () => {
//     getData(201, () => {
//         getData(399, () => {
//             getData(909)
//         })
//     })
// })

// getData(201)
// getData(399)



// function maggie(id, callback) {
//     setTimeout(() => {
//         console.log(id);
//         if (callback) {
//             callback()
//         }
//         else {
//             console.log("your Order is Ready");
//         }
//     }, 2000)
// }

// function boil(cb) {
//     console.log("Boiling Maggie....");
// }
// function masala(cb) {
//     console.log("Add some Masala");
// }
// function cook() {
//     console.log("cook for 2mins");
// }


// maggie(boil(), () => {
//     maggie(masala(), () => {
//         maggie(cook())
//     })
// })


// const Data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Hogaya")
//         resolve("Data Milgaya")
//     }, 2000)
// })


// function getData(id) {
//     return new Promise((resolve, reject) => {
//         console.log("Fetching Data From Database.....")
//         setTimeout(() => {
//             console.log(id)
//             resolve()
//         }, 2000)
//     })
// }


// getData()


// Data.then(() => {
//     console.log("Successfully Got Data")
// }).catch(() => {
//     console.log("Error Occured")
// })



// function getData(id) {
//     return new Promise((resolve, reject) => {
//         console.log("Fetching Data From Database.....")
//         setTimeout(() => {
//             console.log(id)
//             resolve(id)
//         }, 2000)
//     })
// }


// getData(101).then((data) => {
//     console.log("Data ", data);

//     getData(201).then((data) => {
//         console.log("Data ", data);
//         getData(399).then((data) => {
//             console.log("Data ", data);
//             getData(909)
//         })
//     })
// }).catch((error) => {
//     console.log("Error Occured", error)
// })



// const Data = fetch("https://fakestoreapi.com/products")

// Data.then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log("Data ", data)
// }).catch((error) => {
//     console.log("Error Occured", error)
// })