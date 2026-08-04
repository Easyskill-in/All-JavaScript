const form = document.querySelector("form")
const input = document.querySelector("input")
const tbody = document.querySelector("tbody")
let arr = []

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() === "") {
        return;
    }
    // console.log(e.target)
    arr.push({ id: Date.now(), task: input.value })
    console.log(arr);

    showData(arr)
    input.value = ""
})



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
    showData(arr)
}

