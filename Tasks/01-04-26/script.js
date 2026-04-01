const Users = JSON.parse(localStorage.getItem("Users")) || []


const form = document.querySelector("form")
const username = document.querySelector("#name")
const image = document.querySelector("#image")
const role = document.querySelector("select")


form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!username.value || !image.value || !role.value) {
        console.log("All fileds are Required");
        return;
    }

    Users.push({
        username: username.value,
        image: image.value,
        role: role.value,
    })

    localStorage.setItem("Users", JSON.stringify(Users))

    username.value = ""
    role.value = ""
    image.value = ""

    console.log(Users)

    window.location.href = "User.html"
})