const form = document.querySelector('form');
const input = document.querySelector("input")
const tbody = document.querySelector("tbody")

let i = 0;

form.addEventListener("submit", (e) => {

    if (input.value.trim() === "") { return; }

    i++;
    e.preventDefault();
    console.log(e)

    const tr = document.createElement("tr")
    const No = document.createElement("td")
    const Task = document.createElement("td")
    const Delete = document.createElement("td")
    const Done = document.createElement("td")

    No.innerText = i;
    Task.innerText = input.value;

    const delete_button = document.createElement("button");
    delete_button.innerText = "Delete"

    const done_button = document.createElement("button");
    done_button.innerText = "Done"

    Delete.appendChild(delete_button)
    Done.appendChild(done_button)

    delete_button.addEventListener("click", () => {
        tr.remove();
    })
    done_button.addEventListener("click", () => {
        Task.style.textDecoration = "line-through"
        Task.style.color = "green"
    })

    tr.append(No, Task, Delete, Done)

    tbody.appendChild(tr)

    input.value = ""
})



// localStorage.setItem("Name", "Easyskill")

// const data = localStorage.getItem("Name")

// localStorage.removeItem("Key")


// localStorage.clear()


// localStorage.setItem("arr", [1, 2, 3, 4, 5, 6, 7, 8])


let array = [
    { Task: "T1", id: 101, status: false },
    { Task: "T2", id: 102, status: false },
    { Task: "T3", id: 103, status: true },
    { Task: "T4", id: 104, status: false },
    { Task: "T5", id: 105, status: true },
]



localStorage.setItem("obj", JSON.stringify(array))
const data = JSON.parse(localStorage.getItem("obj"))