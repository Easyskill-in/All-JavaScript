// console.log("%c Welcome to my website! 👋", "color: #4CAF50; font-size: 20px; font-weight: bold;");

// const button = document.querySelector("button");

// let currentBox = document.body;

// button.addEventListener("click", () => {
//     addBox()
// });



// const colors = ["red", "blue", "pink", "black", "white", "green", "yellow", "lightblue", "gray"]

// let i = 0;
// function addBox() {
//     console.log("Add Box Function")

//     const box = document.createElement("div")

//     box.style.height = currentBox.style.height ? (parseInt(currentBox.style.height) / 2) + "px" : "800px"

//     box.style.width = currentBox.style.width ? (parseInt(currentBox.style.width) / 2) + "px" : "800px"

//     if (i >= colors.length) { i = 0; }
//     box.style.backgroundColor = colors[i];

//     i++;

//     box.addEventListener("click", () => {
//         event.stopPropagation();
//         console.log(currentBox.parentElement)
//         let temp = currentBox.parentElement;
//         currentBox.parentElement.removeChild(box)
//         currentBox = temp;
//     })
//     console.log(box)
//     // console.log(curre)
//     currentBox.appendChild(box)
//     currentBox = box
// }
const colors = ["red", "blue", "pink", "black", "white", "green", "yellow", "gray", "lightblue"]

const body = document.body;

let i = 0;

body.addEventListener("click", (event) => {
    console.log("Body Clicked", event)
    console.log("Body Clicked", event.target)
    console.log("Body Clicked", event.x)
    console.log("Body Clicked", event.y)

    const ball = document.createElement("div")
    ball.classList.add("ball")

    ball.style.height = "50px"
    ball.style.width = "50px"
    ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    ball.style.position = "absolute"
    ball.style.borderRadius = "50%"
    ball.style.left = event.x - 20 + "px"
    ball.style.top = event.y - 20 + "px"

    document.body.appendChild(ball)

    console.log("---------------------------")
    console.log(ball)
    console.log("---------------------------")

    setTimeout(() => {
        ball.remove()
    }, 2000)
})

