const ball = document.querySelector('.ball');
const img = document.querySelectorAll('img');
// const h1 = document.querySelector('h1');


// h1.addEventListener("mousedown", () => {
//     console.log("mousedown")
// })

// h1.addEventListener("mouseup", () => {
//     console.log("mouseup")
// })
// h1.addEventListener("mouseout", () => {
//     console.log("mouseover")
// })
// h1.addEventListener("mouseover", () => {
//     console.log("mouseover")
// })

document.body.addEventListener("mousemove", (e) => {
    // console.log(e)
    // console.log(e.x)
    // console.log(e.y)


    ball.style.left = e.x - 40 + "px"
    ball.style.top = e.y - 40 + "px"
})



img[0].addEventListener("mousemove", () => {

    ball.style.backgroundImage = "url('https://images.unsplash.com/photo-1778274632479-a5a8986921f5?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    ball.style.height = "200px"
    ball.style.width = "200px"

})
img[0].addEventListener("mouseout", () => {
    ball.style.backgroundImage = "url('')"
    ball.style.height = "100px"
    ball.style.width = "100px"
})


img[1].addEventListener("mousemove", () => {
    ball.style.backgroundImage = "url('https://images.unsplash.com/photo-1777891873941-ea5d0ee868af?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    ball.style.height = "200px"
    ball.style.width = "200px"

})
img[1].addEventListener("mouseout", () => {
    ball.style.backgroundImage = "url('')"
    ball.style.height = "100px"
    ball.style.width = "100px"


})
