// const h1 = document.querySelector("h1")

// const myTag = document.createElement("h1")
// myTag.innerText = "Hello New Tag!"

// const body = document.body

// body.appendChild(myTag)


// const img = document.createElement("img")

// img.src = "https://images.unsplash.com/photo-1778793576394-852bfefff4da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// img.height = 200

// body.appendChild(img)


// const a = document.createElement("a")

// a.href = "https://google.com"
// a.target = "_blank"

// body.appendChild(a)


// a.innerText = "User.com"


const redBox = document.createElement("div")
redBox.style.height = "500px"
redBox.style.width = "500px"
redBox.style.backgroundColor = "red"

document.body.prepend(redBox)

const yellowBox = document.createElement("div")
yellowBox.style.height = parseInt(redBox.style.height) + "px"
yellowBox.style.width = parseInt(redBox.style.width) / 2 + "px"
yellowBox.style.backgroundColor = "yellow"


redBox.appendChild(yellowBox)

const BlueBox = document.createElement("div")
BlueBox.style.height = parseInt(yellowBox.style.height) / 4 + "px"
BlueBox.style.width = parseInt(yellowBox.style.width) / 2 + "px"
BlueBox.style.backgroundColor = "blue"


yellowBox.appendChild(BlueBox)

const PinkBox = document.createElement("div")
PinkBox.style.height = parseInt(yellowBox.style.height) / 4 + "px"
PinkBox.style.width = parseInt(yellowBox.style.width) / 2 + "px"
PinkBox.style.backgroundColor = "pink"


yellowBox.prepend(PinkBox)

const BlackBox = document.createElement("div")
BlackBox.style.height = parseInt(yellowBox.style.height) / 4 + "px"
BlackBox.style.width = parseInt(yellowBox.style.width) / 2 + "px"
BlackBox.style.backgroundColor = "black"

yellowBox.appendChild(BlackBox)
BlackBox.after(BlueBox)