// function A() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ name: "A", age: 20, city: "New York", home: "USA" })
//         }, 2000)
//     })
// }


// function B(Product) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Product.name = "B";
//             resolve(Product);
//             // reject("Errorororo");
//         }, 2000)
//     })
// }


// const Data = A().then((data) => {
//     console.log(data)
//     return B(data)
// })
// A().then((data) => {
//     console.log(data)
//     return B(data)
// }).then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })



// const Data = fetch("https://jsonplaceholder.typicode.com/todos")

// Data.then((data) => {
//     // console.log(data)

//     // const res = data.json()
//     // console.log({ res })

//     return data.json()
// }).then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.error(error)
// })



fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        ShowData(data)
    }).catch((error) => {
        console.error(error)
    })


function ShowData(data) {
    data.forEach((value, index) => {
        const h1 = document.createElement("h1")
        const hr = document.createElement("hr")
        h1.innerText = value.id + "  " + value.title;
        console.log({ value })

        document.body.append(hr, h1, hr)
    })
}


