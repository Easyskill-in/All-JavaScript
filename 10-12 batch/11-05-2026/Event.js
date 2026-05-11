const xyz = document.querySelector("h1")


function Greet() {
    console.log("Hello User")
}


// h1.onclick = function () {
//     Greet()
//     console.log("Js")
// }


// xyz.addEventListener("click", () => {
//     console.log("Xyz Clicked")
// })

// xyz.addEventListener("dblclick", () => {
//     console.log("Double Click")
// })



xyz.addEventListener("click", () => {
    // console.log("Dark")

    if (xyz.innerText == "🌑") {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        xyz.innerText = "☀️"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        xyz.innerText = "🌑"
    }

})