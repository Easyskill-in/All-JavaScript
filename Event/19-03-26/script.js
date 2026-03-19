// const h1 = document.querySelector("h1")

// h1.addEventListener("click", () => {

//     if (h1.style.color === "red") {
//         h1.style.color = "green"
//     } else {
//         h1.style.color = "red"
//     }
// })


// const button = document.querySelector("button")



// button.addEventListener("click", () => {
//     if (button.innerText === "🌚") {

//         button.innerText = "🌞"

//         document.body.style.backgroundColor = "black"

//         h1.style.textAlign = "center"

//     } else {
//         button.innerText = "🌚"
//         document.body.style.
//             backgroundColor = "white"

//         h1.style.textAlign = "start"
//     }
// })

// -------------------------------
// Task 2

// const button = document.querySelectorAll("button")

// const box = document.querySelector(".box")

// button[0].addEventListener("click", () => {
//     console.log("Box Height : ", box.style.height)

//     // const size = box.style.height;


//     box.style.height = (parseInt(box.style.height) + 50) + "px"
//     box.style.width = (parseInt(box.style.width) + 50) + "px"
// })

// button[1].addEventListener("click", () => {
//     console.log("Box Height : ", box.style.height)
//     box.style.height = (parseInt(box.style.height) - 50) + "px"
//     box.style.width = (parseInt(box.style.width) - 50) + "px"

// })


// -------------------------

// Dice Game

const diceImages = [
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
];

const img = document.querySelector("img")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    console.log(Math.floor(Math.random() * 6))
    console.log(diceImages[Math.floor(Math.random() * 6)]);
    img.src = diceImages[Math.floor(Math.random() * 6)]
})


document.body.addEventListener("click", (event) => {
    const ball = document.createElement("div")
    ball.style.height = "50px"
    ball.style.width = "50px"
    ball.style.backgroundColor = "yellow"
    ball.style.borderRadius = "50%"
    ball.className = "ball"
    document.body.appendChild(ball)

    ball.style.left = event.clientX + "px"
    ball.style.top = event.clientY + "px"

    console.log(ball)
    console.log(event.clientX)
    console.log(event.clientY)
})