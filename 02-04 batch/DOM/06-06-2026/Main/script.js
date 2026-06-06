let Tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

const input = document.querySelector("input")
const form = document.querySelector("form")
const tbody = document.querySelector("tbody")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    Tasks.push(
        {
            id: Date.now(),
            task: input.value,
        })

    localStorage.setItem("Tasks", JSON.stringify(Tasks))

    input.value = ""

    console.log(Tasks)

    addTask();
})

addTask();

function addTask() {

    tbody.innerHTML = ""

    Tasks.forEach((value) => {
        const tr = document.createElement("tr")

        const No = document.createElement("td")
        const Task = document.createElement("td")
        const Delete = document.createElement("td")

        const delete_button = document.createElement("button")

        delete_button.innerText = "Delete"

        delete_button.addEventListener("click", () => {
            console.log(value.id, value.task)
            deleteTask(value.id)
        })

        Delete.appendChild(delete_button)

        No.innerText = value.id;
        Task.innerText = value.task;

        tr.append(No, Task, Delete)

        tbody.appendChild(tr)
    })
}



function deleteTask(id) {
    Tasks = Tasks.filter((value) => {
        return value.id !== id
    })
    localStorage.setItem("Tasks", JSON.stringify(Tasks))

    addTask();
}