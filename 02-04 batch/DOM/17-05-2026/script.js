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




let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 12, 13, 15, 15]


// function count(arr, target) {
//     let icount = 0;
//     let c = 0;
//     for (let i = 0; i < arr.length; i++) {
//         icount++;

//         if (arr[i] > target) {
//             return { c, icount };
//         } else if (arr[i] === target) {
//             c++;
//         }
//     }

//     return { c, icount };
// }

function count(arr, target) {

    return (arr.lastIndexOf(target) - arr.indexOf(target)) + 1;
}

function fn(arr) {
    let max = { num: 0, count: 0 }
    let newArr = [...new Set(arr)]

    newArr.forEach(v => {
        let result = count(arr, v)
        if (result > max.count) {
            max = { num: v, count: result }
        }
    })

    return max
}