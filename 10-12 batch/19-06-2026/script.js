const Users = JSON.parse(localStorage.getItem("Users")) || []

const form = document.querySelector("form")
const tbody = document.querySelector("tbody")
const input = document.querySelector("input")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const obj = {
        id: Date.now(),
        task: input.value,
        status: false
    }
    Users.push(obj)
    console.log(Users)
    localStorage.setItem("Users", JSON.stringify(Users))
    addTask()
    input.value = ""
})

addTask()

function addTask() {
    tbody.innerHTML = ""
    Users.forEach((value) => {
        const tr = document.createElement("tr");
        const No = document.createElement("td");
        const Task = document.createElement("td");
        No.innerText = value.id;
        Task.innerText = value.task

        tr.append(No, Task)
        tbody.appendChild(tr)
    })
}