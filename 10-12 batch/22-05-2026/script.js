// document.body.addEventListener("keydown", (e) => {
//     console.log("Key Down")
//     alert(e.key)
// })
// document.body.addEventListener("keyup", (e) => {
//     console.log("Key Up")
//     alert(e.key)
// })
// document.body.addEventListener("keypress", (e) => {
//     console.log("keypress")
//     alert(e.key)
// })

const ball = document.querySelector("img")
const buttons = document.querySelectorAll("button")

buttons.forEach((v) => {
    v.style.backgroundColor = "#e6e6e6"
})

document.body.addEventListener("keydown", (e) => {
    console.log(ball.style.top)
    console.log(ball.style.left)
    switch (e.key) {
        case 'ArrowUp':
            console.log("Yes Arrow Up Key Pressed")
            ball.style.top = parseInt(ball.style.top) - 10 + "px"
            buttons[0].style.backgroundColor = "gray"
            setTimeout(() => {
                buttons[0].style.backgroundColor = "#e6e6e6"
            }, 300)
            break;
        case 'ArrowDown':
            ball.style.top = parseInt(ball.style.top) + 10 + "px"
            console.log("Yes Arrow Down Key Pressed")
            buttons[1].style.backgroundColor = "gray"
            setTimeout(() => {
                buttons[1].style.backgroundColor = "#e6e6e6"
            }, 300)
            break;
        case 'ArrowLeft':
            ball.style.left = parseInt(ball.style.left) - 10 + "px"
            console.log("Yes Arrow Left Key Pressed")
            buttons[2].style.backgroundColor = "gray"
            setTimeout(() => {
                buttons[2].style.backgroundColor = "#e6e6e6"
            }, 300)
            break;
        case 'ArrowRight':
            ball.style.left = parseInt(ball.style.left) + 10 + "px"
            console.log("Yes Arrow Right Key Pressed")
            buttons[3].style.backgroundColor = "gray"
            setTimeout(() => {
                buttons[3].style.backgroundColor = "#e6e6e6"
            }, 300)
            break;
        default:
            console.log("Not a Valid Key")
    }
})


// ArrowUp
// ArrowRight
// ArrowDown
// ArrowLeft