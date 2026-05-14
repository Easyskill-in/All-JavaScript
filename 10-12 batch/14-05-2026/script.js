
const ball = document.querySelector("div")
const ball1 = document.querySelector(".ball1")

document.body.addEventListener("click", (event) => {
    console.log("Hello User\n")
    console.table({ X: event.x, Y: event.y })

    ball.style.top = event.y - 40 + "px"
    ball.style.left = event.x - 40 + "px"
    ball1.style.top = event.y + "px"
    ball1.style.left = event.x + "px"
})