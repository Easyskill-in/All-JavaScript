// const input = document.createElement("input")
// const input1 = document.querySelector("input")
// const button = document.querySelector("button")
// const h1 = document.querySelector("h1")

// document.body.appendChild(input)

// input.type = "text"
// input.name = "username"
// input.placeholder = "Enter Your Username"
// input.required = true

// button.addEventListener("click", () => {
//     console.log(input.value)
//     h1.innerText = "Username" + " " + input.value
//     input.value = ''
// })

const DB = []

const username = document.querySelector(".username")
const password = document.querySelector(".password")

const button = document.querySelector("button")

const user = {
    username: "root",
    password: "root"
};

button.addEventListener("click", () => {
    console.log(username.value)
    console.log(password.value)

    user.username = username.value
    user.password = password.value

    console.log("A.", user);

    // DB.push(user)
    DB.push({ username: username.value, password: password.value })

    // console.log("B.", user);

    username.value = ''
    password.value = ''
})
