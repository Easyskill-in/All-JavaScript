const form = document.querySelector("form")
const input = document.querySelector("input")
const table = document.querySelector("table")

let i = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    i++;

    const tr = document.createElement("tr")
    const td_no = document.createElement("td")
    const td_name = document.createElement("td")
    const td_delete = document.createElement("td")

    const delete_button = document.createElement("button")
    delete_button.innerText = "Delete"

    delete_button.addEventListener("click", () => {
        console.log(tr);
        table.removeChild(tr)
        // tr.remove()
    })

    td_delete.appendChild(delete_button)
    tr.append(td_no, td_name, td_delete)

    td_no.innerText = i;
    td_name.innerText = input.value;

    table.appendChild(tr)

    input.value = ""

})


// const obj = {
//     name: "Easyskill",
//     age: 1321,
// }


// localStorage.setItem("OBJ", obj)

// localStorage.setItem("arr", [1, 2, 4, true, false, "Hii", () => { console.log("Hello") }, [1, 2, 3]])

// localStorage.setItem("Name", "Value")
// localStorage.setItem("XYZ", "ABCD")
// localStorage.setItem("XYZ", "ACCCCC")


// const value = localStorage.getItem("Name")

// console.log(value);


// localStorage.clear()

// localStorage.removeItem()



const arr = [1, 2, 4, true, false, "Hii", 99, [1, 2, 3]]

// const JSON_ARRAY = JSON.stringify(arr)

// localStorage.setItem("arr", JSON_ARRAY)
// localStorage.setItem("arr1", arr)


// const myarray = localStorage.getItem("arr")

const obj = {
    name: "MyName",
    age: 12,
    arr: arr,
}

localStorage.setItem("OBJ", JSON.stringify(obj))


// localStorage.getItem("OBJ")
// JSON.parse(localStorage.getItem("OBJ"))