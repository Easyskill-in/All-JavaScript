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
            status: false
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
        const Complete = document.createElement("td")

        const delete_button = document.createElement("button")
        const complete_button = document.createElement("button")


        if (value.status) {
            tr.classList.add("complete")
        } else {
            tr.classList.remove("complete")
        }


        delete_button.innerText = "Delete"
        complete_button.innerText = "Complete"

        delete_button.addEventListener("click", () => {
            console.log(value.id, value.task)
            deleteTask(value.id)
        })

        Delete.appendChild(delete_button)
        Complete.appendChild(complete_button)

        complete_button.addEventListener("click", () => {
            completeTask(value.id)
        })
        // complete_button.addEventListener("click", () => {
        //     value.status = !(value.status);

        //     console.log(value)
        //     if (value.status) {
        //         tr.classList.add("complete")
        //     } else {
        //         tr.classList.remove("complete")
        //     }
        // })

        No.innerText = value.id;
        Task.innerText = value.task;

        tr.append(No, Task, Delete, Complete)

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

function completeTask(id) {
    Tasks = Tasks.map((value) => {
        if (value.id === id) {
            return { ...value, status: !value.status }
            // return { id: value.id, task: value.task, status: !value.status }
        } else {
            return value
        }
    })
    localStorage.setItem("Tasks", JSON.stringify(Tasks))

    addTask();
}