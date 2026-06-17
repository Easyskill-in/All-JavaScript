// const data = fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
//     return data.json()
// }).then((data)=>{
//     console.log(data)

// })


async function fn() {
    try {

        const data = await fetch("https://jsonplaceholder.typicode.com/todos")
        const value = await data.json()
        // console.log(value)
        DOM(value)
    } catch (error) {
        console.log(error)
    }
}


function DOM(array) {
    console.log(array)
    array.forEach((value, index) => {
        if (!value.completed) {

            const p = document.createElement("p")
            p.innerText = value.title;
            p.style.color = value.completed ? "green" : "yellow"
            document.body.appendChild(p)
        }
    })

}

fn()