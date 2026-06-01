document.body.addEventListener("mousemove", (e) => {
    const div = document.createElement("div")
    // div.style.height = "10px"
    // div.style.width = "10px"
    // div.style.backgroundColor = "white"
    // div.style.borderRadius = "50%"

    div.classList.add("div")
    div.style.top = e.y + "px"
    div.style.left = e.x + "px"
    document.body.appendChild(div)

    setTimeout(() => {
        div.remove()
    }, 100)
})