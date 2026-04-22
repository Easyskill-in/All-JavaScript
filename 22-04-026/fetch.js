// alert("Fetch Data from API");



const Data = fetch("https://jsonplaceholder.typicode.com/posts")

// Data.then((data) => {
//     data.json().then((value) => {
//         console.log(value)
//     })
// })
Data.then((data) => {
    return data.json()
}).then((value) => {
    console.log(value)
    MyFn(value)
}).catch((error) => {
    console.log("Error : ", error)
})



function MyFn(data) {
    if (!Array.isArray(data)) {
        console.error("No A Valid Data")
        return;
    }

    data.forEach((value) => {
        const h1 = document.createElement("p")
        h1.id = value.id;
        h1.innerText = value.id + " " + value.title;
        document.body.appendChild(h1)
    })

}



const Product = fetch("https://fakestoreapi.com/products")

Product.then((data) => {
    return data.json()
}).then((value) => {
    console.table(value)
    console.log(value)

    value.forEach((v) => {
        const img = document.createElement("img")
        img.src = v.image
        document.body.appendChild(img)
    })

    // console.log("Product : ", value)
})



async function fn() {
    const Data = await fetch("https://fakestoreapi.com/products")
    const Value = await Data.json()

    console.log(Value)
}