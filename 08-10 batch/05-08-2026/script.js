const form = document.querySelector("form")
const input = document.querySelector("input")
const tbody = document.querySelector("tbody")
let arr = JSON.parse(localStorage.getItem("Task")) || []

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() === "") {
        return;
    }
    // console.log(e.target)
    arr.push({ id: Date.now(), task: input.value })
    localStorage.setItem("Task", JSON.stringify(arr))
    console.log(arr);

    showData(arr)
    input.value = ""
})
showData(arr)


function showData(data) {
    tbody.innerHTML = ""
    data.forEach((value, index) => {
        const tr = document.createElement("tr")
        const No = document.createElement("td")
        const Task = document.createElement("td")
        const TdDelete = document.createElement("td")
        const Delete = document.createElement("button")
        No.innerText = index + 1;
        Task.innerText = value.task;
        TdDelete.appendChild(Delete)

        Delete.innerText = "delete";

        Delete.addEventListener("click", () => {
            deleteData(value.id)
        })

        tr.append(No, Task, TdDelete)
        tbody.appendChild(tr)
        console.log(tr)
    })
}



function deleteData(id) {
    arr = arr.filter(v => v.id !== id)
    // [1, 2, 3, 5]
    localStorage.setItem("Task", JSON.stringify(arr))
    showData(arr)
}


// localStorage.setItem("Key", "value")
// localStorage.setItem("username", "Easyskill")
// localStorage.setItem("username", "MyName")
// localStorage.getItem("username")


// localStorage.setItem("arr", [1, 2, 3, 4, 5])
// localStorage.setItem("obj", { name: "Myname", age: 56, marks: 99 })

// let xyz = { name: "Myname", age: 56, marks: 99 }
// localStorage.setItem("obj", JSON.stringify(xyz))


// let data = JSON.parse(localStorage.getItem("obj"))