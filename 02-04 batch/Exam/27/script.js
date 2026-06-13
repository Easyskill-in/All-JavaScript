const form = document.querySelector("form")

let score = 0;
let quiz = [
    {
        id: 101,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        id: 102,
        question: "What is the capital of Germany?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Berlin"
    },
    {
        id: 103,
        question: "What is the capital of Spain?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Madrid"
    },
    {
        id: 104,
        question: "What is the capital of the United Kingdom?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "London"
    },
    {
        id: 105,
        question: "What is the capital of Italy?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Rome"
    }
]

let x = 0;

quiz.forEach((value, index) => {
    const ques = document.createElement("p")
    ques.innerText = value.question
    form.appendChild(ques)
    value.options.forEach((option) => {
        x++;
        const optionss = document.createElement("input")
        optionss.type = "radio"
        form.appendChild(optionss)
        optionss.value = option
        optionss.name = `name${index}`
        optionss.id = `${option}${x}`

        const lab = document.createElement("label")
        lab.innerText = option
        lab.htmlFor = `${option}${x}`
        form.appendChild(lab)


        optionss.addEventListener("input", (e) => {
            // console.log(e.target.value)
            // console.log(e.target.checked)
            // console.log(value.id)
            // console.log(e)
            setScore(value.id, e.target.value)
        })
    })
})

function setScore(id, ans) {
    const value = quiz.find((v) => v.id === id)
    console.log(value)
    if (value.answer === ans) {
        score++;
    }
}

// let count = 0

// const timer = document.createElement("span")
// p.appendChild(timer)
// timer.innerText = count
// let inerval = setInterval(() => {
//     count++;
//     timer.innerText = count;

//     if (count === 60) {
//         clearInterval(inerval)
//         options.forEach((radio) => {
//             radio.disabled = true

//         })
//         count = 0
//     }
// }, 1000)


