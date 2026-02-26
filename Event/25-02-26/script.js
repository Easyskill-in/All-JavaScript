const select = document.getElementById("tagType")
const form = document.querySelector("form")
const TagName = document.getElementById("tagname")
const TagText = document.getElementById("tagContent")

function updateSelect() {
    const main = document.getElementsByTagName("main")[0]
    const allElements = [...main.children]

    // console.log(allElements)
    // console.log(allElements[0])
    // console.log(allElements[1])
    // console.log(Array.isArray(allElements))
    allElements.forEach((value) => {
        const option = document.createElement("option")
        option.innerText = value.id;
        option.value = value.id;
        select.appendChild(option)
    })
}

updateSelect()

function addTag() {


    const myelement = document.getElementById(select.value)

    console.log({ myelement })

    const newElement = document.createElement(TagName.value)
    newElement.innerText = TagText.value
    newElement.style.backgroundColor = ["lightblue", "red", "lightgreen", "lightpink", "lightyellow", "pink"][Math.floor(Math.random() * 6)]

    newElement.style.padding = "30px"
    newElement.style.margin = "10px"
    newElement.style.border = `${Math.floor(Math.random() * 10)}px solid black`
    // newElement.id = "el-" + TagText.value.toLowerCase().slice(0, 5)
    newElement.id = "el-" + TagText.value.toLowerCase().slice(0, 5)
    console.log({ newElement })


    myelement.appendChild(newElement)
}

form.addEventListener("submit", (e) => {
    // alert("Okay")
    e.preventDefault()
    addTag()

    TagName.value = ""
    TagText.value = ""

    select.innerHTML =
        `
        <option value="open" hidden>Select Tag</option>
            <option value="main">Main</option>
    `
    updateSelect();
})