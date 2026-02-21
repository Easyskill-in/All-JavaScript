const input = document.querySelector('input');
const ul = document.querySelector('ul');
const button = document.querySelector('button');

let Users = []
button.addEventListener("click", () => {


    ul.innerHTML = ""
    Users.push({ username: input.value, id: Date.now() })
    console.log(Users);
    // li.innerText = input.value;
    // console.log(li)

    Users.forEach((value) => {
        console.log("Each Value : ", value)
        const li = document.createElement("li")
        const Deletebutton = document.createElement("button")
        Deletebutton.innerText = "DELETE"

        Deletebutton.addEventListener("click", () => {

            ul.removeChild(li)

            Users = Users.filter((User) => {
                return User.id !== value.id
            })

            console.log("New ARRAYA : ", Users)
        })

        li.innerText = value.username
        li.appendChild(Deletebutton)
        ul.appendChild(li)
    })
    input.value = ""
})


