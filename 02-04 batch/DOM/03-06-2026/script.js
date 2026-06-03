// document.body.addEventListener("keypress", (e) => {
//     console.log("Key pressed", e.key)
// })
// document.body.addEventListener("keydown", (e) => {
//     console.log("Key Pressed", e.key)
// })
// document.body.addEventListener("keyup", (e) => {
//     console.log("Key up", e.key)
// })

/*
Key pressed ArrowRight
script.js:13 Key pressed ArrowDown
script.js:13 Key pressed ArrowLeft
script.js:13 Key pressed ArrowUp
*/

// const img = document.querySelector("img")

// let steps = 5;

// document.body.addEventListener("keydown", (e) => {
//     // console.log(, e);


//     if (e.key === "ArrowRight") {
//         console.log("You pressed the right arrow key")

//         img.style.left = parseInt(img.style.left) + steps + "px"
//         img.style.transform = "rotateY(0deg)";

//     } else if (e.key === "ArrowDown") {
//         img.style.top = parseInt(img.style.top) + steps + "px"
//         console.log("You pressed the down arrow key")

//     } else if (e.key === "ArrowLeft") {
//         img.style.left = parseInt(img.style.left) - steps + "px"
//         img.style.transform = "rotateY(180deg)";
//         console.log("You pressed the left arrow key")

//     } else if (e.key === "ArrowUp") {
//         img.style.top = parseInt(img.style.top) - steps + "px"
//         console.log("You pressed the up arrow key")
//     }
//     else if (e.key === " ") {

//         img.classList.add("jump")

//         img.style.left = parseInt(img.style.left) + 20 + "px"
//         setTimeout(() => {
//             img.classList.remove("jump")
//         }, 1000)

//         console.log(img)
//     }
//     else {
//         console.log("You pressed a different key")
//     }
// })


const button = document.querySelector("#button")

const song = new Audio("./Djo.mp3")
setInterval(() => {
    console.log({ "Current Time": song.currentTime })
    console.log({ "Duration": song.duration })
}, 1000)

button.addEventListener("click", () => {
    console.log(button)
    if (button.src.includes("pause")) {
        song.pause()
        button.src = button.src.replace("pause", "play")
    } else {
        song.play()
        button.src = button.src.replace("play", "pause")
    }
})
document.body.addEventListener("keydown", (e) => {

    if (e.key == " ") {

        if (button.src.includes("pause")) {
            song.pause()
            button.src = button.src.replace("pause", "play")
        } else {
            song.play()
            button.src = button.src.replace("play", "pause")
        }
    }
})
song.addEventListener("loadedmetadata", () => {
    input.max = song.duration;
    console.log("Duration:", song.duration);
});
let i = 0;

setInterval(() => {
    input.value = song.currentTime;
    if (song.ended) {
        input.value = 0;
        button.src = button.src.replace("pause", "play")
    }

}, 100)


const volumn = document.querySelector("#volume")

volumn.value = 1;


volume.addEventListener("input", (e) => {
    song.volume = e.target.value;

    console.log("Volume:", song.volume);
});


const input = document.querySelector("input")
input.max = song.duration;
input.min = 0;
input.value = 0;
input.addEventListener("input", (e) => {
    song.currentTime = e.target.value
})