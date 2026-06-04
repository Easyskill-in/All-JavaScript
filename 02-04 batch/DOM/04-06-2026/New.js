const main = document.querySelector(".main")
const input = document.querySelector("input")
const button = document.querySelector("button")

let drawing = false;

main.addEventListener("mousedown", () => {
    drawing = true;
});

main.addEventListener("mouseup", () => {
    drawing = false;
});


main.addEventListener("mousemove", (e) => {

    if (!drawing) return;
    const div = document.createElement("div")
    // div.style.height = "10px"
    // div.style.width = "10px"
    // div.style.backgroundColor = "white"
    // div.style.borderRadius = "50%"

    div.classList.add("div")
    div.style.top = e.y + "px"
    div.style.left = e.x + "px"
    div.style.backgroundColor = input.value;

    main.appendChild(div)

})



button.addEventListener("click", () => {
    main.innerHTML = ""
})
