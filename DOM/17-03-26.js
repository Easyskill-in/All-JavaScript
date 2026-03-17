const a = document.createElement("a")
a.innerText = "Google.com"
a.href = "https://google.com"


// document.body.appendChild(a)


const img = document.createElement("img")
img.src = "https://plus.unsplash.com/premium_photo-1677159451024-4d0e532543b9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


// a.appendChild(img)
// document.body.appendChild(img)

// img.height = 200

//https://www.youtube.com/

const video = document.createElement("video")
video.src = "./background2.mp4"
video.style.height = "50%"
// video.controls = true
video.autoplay = true
video.muted = true
video.loop = true
document.body.appendChild(video)


const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")

box1.appendChild(a)
box2.appendChild(video)

const blueBox = document.createElement("div")
blueBox.style.height = "100px"
blueBox.style.width = "100px"
blueBox.style.backgroundColor = "blue"
// blueBox.innerText = "Blue Box"
blueBox.style.borderRadius = "50%"
box1.appendChild(blueBox)



const yellowBox = document.createElement("div")

yellowBox.style.height = "50px"
yellowBox.style.width = "50px"
yellowBox.style.backgroundColor = "yellow"
// yellowBox.innerText = "Yellow box"

yellowBox.style.borderRadius = "50%"

blueBox.appendChild(yellowBox)

// box2.appendChild(yellowBox)

// yellowBox.id = "Yellow"

// box1.className

console.log(box1.classList)
console.log(box1.className)
// box1.classList.add()
// box1.classList.remove()
// box1.classList.toggle()