// // const img = document.querySelector("img")

// // https://plus.unsplash.com/premium_photo-1773277369068-8488542c42ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

// // console.log(img)
// // console.log(img.src)

// // img.src = "https://plus.unsplash.com/premium_photo-1773277369068-8488542c42ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



// // const input = document.querySelector("input")

// // input.type = "password"
// // input.value = ""


// // const h1 = document.querySelector("h1")


// const p = document.createElement("p")

// p.innerText = "Hello HTML"


// // document.body.appendChild(p)

// const box1 = document.querySelector(".box1")
// box1.appendChild(p)


// const h1 = document.createElement("h1")

// h1.innerText = "ABCD XYZ"

// // const X = document.querySelector(".box2")
// const X = document.querySelector(".main")

// X.appendChild(h1)


const img = document.createElement("img")

document.body.appendChild(img)
//https://images.unsplash.com/photo-1761850648640-2ee5870ee883?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
img.src = "https://images.unsplash.com/photo-1761850648640-2ee5870ee883?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// img.height = 100

img.style.height = "200px"

img.alt = "My Image..."


function get(name) {
    return document.createElement(name)
}

const input = get("input")
input.type = "email"
input.placeholder = "ABCD"
// 'ABCD'
document.body.appendChild(input)
// < input type = "email" placeholder = "ABCD" >​