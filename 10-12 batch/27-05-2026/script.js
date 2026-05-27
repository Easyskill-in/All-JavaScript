const name = document.querySelector("input");
const email = document.querySelector("input[type='email']");
const form = document.querySelector("form");
const table = document.querySelector("tbody");

let i = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
    if (name.value.trim() === "" || email.value.trim() === "") {
        console.error("Name and Email is Required..")
        return;
    }
    i++;
    const tr = document.createElement("tr")
    const No = document.createElement("td")
    const Name = document.createElement("td")
    const Email = document.createElement("td")
    const DeleteTD = document.createElement("td")
    const Delete = document.createElement("button")

    Delete.innerText = "Delete"
    DeleteTD.appendChild(Delete)

    Delete.addEventListener("click", (e) => {
        console.log(tr)
        tr.remove()

    })

    No.innerText = i;
    Name.innerText = name.value
    Email.innerText = email.value

    tr.append(No, Name, Email, DeleteTD)
    table.appendChild(tr)
    name.value = ""
    email.value = ""

})



localStorage.setItem("Key", "Value")