// let xyz;
// xyz = document.getElementById("a")

// xyz = document.querySelector("#a")

// xyz = document.getElementsByTagName("h1")[0]

// let div = null;

// div = document.getElementsByTagName("div")[0]



// document.querySelectorAll("p").forEach((value, index) => {
//     value.style.color = "blue"
//     value.innerText = value.innerText + " ---"
// })

// const v = confirm("Do you want to continue?")

// const B = document.body

// if (v) {
//     B.style.backgroundColor = "green"
//     console.log("User wants to continue.")
// } else {
//     B.style.backgroundColor = "red"
//     console.log("User does not want to continue.")
// }



// console.log("Hello User")
// const x = setTimeout(() => {
//     document.body.style.backgroundColor = "red"
//     console.log("Hello User")
// }, 4000)

// clearTimeout(x)



// const x = setInterval(() => {
//     console.log("Hello")
// }, 2000)

// clearInterval(x)


const color = prompt("Enter A color")
document.body.style.backgroundColor = color

const arr = ["red", "blue", "green", "yellow", "pink", "gray"]
let i = 0;
const y = setInterval(() => {

    let val = Math.floor(Math.random() * arr.length)
    console.log(val)

    document.body.style.backgroundColor = arr[val]

    i++;

    if (arr.length === i) {
        i = 0;
    }

    // document.body.style.backgroundColor =
    //     document.body.style.backgroundColor === "green" ? "red" : "green"

    // console.log(document.body.style.backgroundColor === "green" ? "red" : "green");

    // console.log("red")
    // document.body.style.backgroundColor = "green"
    // console.log("green")
}, 10000)




















/*
div.innerHTML
'\n        <h1>Welcome to My Website</h1>\n        <p>This is a simple paragraph on my website.</p>\n        <p>Feel free to explore and learn more about web development!</p>\n    '
div.innerText
'Welcome to My Website\n\nThis is a simple paragraph on my website.\n\nFeel free to explore and learn more about web development!'
*/

/*
xyz.innerText ="Hii"
'Hii'
xyz.innerText ="H2O"
'H2O'
xyz.innerText ="H<sup>2</sup>O"
'H<sup>2</sup>O'
xyz.innerHTML ="H<sup>2</sup>O"
'H<sup>2</sup>O'
*/

/*
xyz
<h1 id=​"a">​Hello, World!​</h1>​
xyz.style.color = "Red"
'Red'
xyz.style.border = "2px solid black"
'2px solid black'
xyz.style.textAlign = "center"
'center'
xyz.style.backgroundColor = "yellow"
'yellow'
*/