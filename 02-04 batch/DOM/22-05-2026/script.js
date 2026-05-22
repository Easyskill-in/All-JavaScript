// const img = document.querySelector("img")
const h1 = document.querySelector("h1")
const button = document.querySelector("button")
const button1 = document.querySelector(".btn")
const reset = document.querySelector(".reset")

const ball = document.querySelector(".ball")
const h = ball.style.height
const w = ball.style.width

let i = 0;
button.addEventListener("click", () => {
    i++
    h1.innerText = `Hello ${i}`
    ball.style.transform = `rotate(${i * 45}deg)`
    ball.style.height = parseInt(ball.style.height) + 5 + "px"
    ball.style.width = parseInt(ball.style.width) + 5 + "px"
})

button1.addEventListener("click", () => {
    i--
    if (i <= 0) {
        i = 0
    }
    h1.innerText = `Hello ${i}`

    ball.style.transform = `rotate(${i * 270}deg)`
    ball.style.height = parseInt(ball.style.height) - 5 + "px"
    ball.style.width = parseInt(ball.style.width) - 5 + "px"
})

reset.addEventListener("dblclick", () => {
    i = 0;
    h1.innerText = `Hello ${i}`
    ball.style.transform = `rotate(${0}deg)`
    ball.style.height = h
    ball.style.width = w

})
// function fn() {
//     console.log("hello user")
// }
// h1.onclick = fn


// h1.addEventListener("click", () => {
//     console.log("Hello From Event Listener")
//     h1.style.backgroundColor = "yellow"

// })
// h1.addEventListener("dblclick", () => {
//     h1.style.backgroundColor = "red"
// })

