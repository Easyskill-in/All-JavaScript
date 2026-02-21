const h1 = document.querySelector("h1")
const box = document.querySelector(".box")
const ball = document.querySelector(".ball")

// h1.addEventListener("click", () => {
//     console.log("H1 Tag Cliked")
// })
h1.addEventListener("dblclick", () => {
    console.log("H1 Tag DBLCliked")
})

// box.addEventListener("mouseover", () => {
//     console.log("Hover")
// })
// box.addEventListener("mouseenter", () => {
//     console.log("mouseenter")
// })
// box.addEventListener("mouseleave", () => {
//     console.log("mouseleave")
// })
// box.addEventListener("mousedown", () => {
//     console.log("mousedown")
// })
// box.addEventListener("mouseup", () => {
//     console.log("mouseup")
// })

box.addEventListener("mousemove", (e) => {
    ball.style.left = e.offsetX + "px";
    ball.style.top = e.offsetY + "px";

    const rect = ball.getBoundingClientRect();
    console.log("Left : ", rect.left, "Top : ", rect.top, rect);

});

const c1 = document.querySelector(".cart1")

c1.addEventListener("mouseenter", (e) => {
    ball.style.height = "100px";
    ball.style.width = "100px";
    ball.style.backgroundImage = "url('https://images.unsplash.com/photo-1741821159859-c129cf0289f2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    c1.style.backgroundImage = "url('https://images.unsplash.com/photo-1769334440627-35cbcbf3cadb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"

})
c1.addEventListener("mouseleave", (e) => {
    ball.style.height = "50px";
    ball.style.width = "50px";
    ball.style.backgroundImage = "url('')"
    c1.style.backgroundImage = "url('')"

})


const X = ball.getBoundingClientRect()