const Users = JSON.parse(localStorage.getItem("Users")) || []


console.log(Users);

const main = document.querySelector(".main")


Users.forEach((value, index) => {

    const user = document.createElement("div")
    user.className = "user"

    const img = document.createElement("div")
    img.className = "bg"

    const h1 = document.createElement("h1")
    const h4 = document.createElement("h4")

    const Deletebutton = document.createElement("button")
    const Updatebutton = document.createElement("button")

    Deletebutton.innerText = "Delete"
    Updatebutton.innerText = "Update"

    Deletebutton.className = "delete"
    Updatebutton.className = "update"

    h1.innerText = value.username
    h4.innerText = value.role
    img.style.backgroundImage = `url(${value.image})`

    user.append(img, h1, h4, Deletebutton, Updatebutton)
    main.appendChild(user)

})