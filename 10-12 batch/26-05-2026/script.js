const input = document.querySelector("input")
const color = document.querySelector("input[type='color']")
const button = document.querySelector("button")
const main = document.querySelector(".main")
const h4 = document.querySelector("h4")

button.addEventListener("click", () => {
    console.log(input.value)
    const h1 = document.createElement("h1")
    h1.classList.add("Task")
    h1.innerText = input.value
    main.appendChild(h1)

    h1.addEventListener("dblclick", () => {
        h1.remove()
    })

    input.value = ""
})



input.addEventListener("change", (e) => {
    console.log(e.target.value)
    h4.innerText = "Hello " + e.target.value
    document.body.style.backgroundColor = e.target.value
})
// input.addEventListener("input", (e) => {
//     console.log(e.target.value)
//     h4.innerText = "Hello " + e.target.value
// })


color.addEventListener("blur", (e) => {
    console.log(e.target.value)

    document.body.style.backgroundColor = e.target.value
})

// color.addEventListener("focus", (e) => {
//     console.log(e.target.value)

//     document.body.style.backgroundColor = e.target.value
// })

// color.addEventListener("change", (e) => {
//     console.log(e.target.value)

//     document.body.style.backgroundColor = e.target.value
// })


// color.addEventListener("input", (e) => {
//     console.log(e.target.value)

//     document.body.style.backgroundColor = e.target.value
// })