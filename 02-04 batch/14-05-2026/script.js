
// function fn(arr) {
//     let newArray = [1];
//     newArray[0] = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         newArray.push(newArray[i - 1] + arr[i])
//     }
//     return newArray
// }
// //return []


// fn([1, 2, 3, 8, 7, 5, 4])


const img = document.querySelector("img")
const a = document.querySelector("a")
const h1 = document.querySelector("h1")
const main = document.querySelector(".main")

// h1.innerText = "Easyskill"
// h1.innerText = "Easyskill<sup>©</sup>"
h1.innerHTML = "Easyskill<sup>©</sup>"


img.src = "https://images.unsplash.com/photo-1777829999062-917dd30ad425?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

a.href = "https://www.youtube.com/"
a.target = "_blank"