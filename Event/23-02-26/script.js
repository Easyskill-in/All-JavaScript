const input = document.querySelector('input');
const color = document.querySelector('.color');
const h1 = document.querySelector('h1');



input.addEventListener("input", (e) => {
    console.log(e.target.value)
    h1.innerText = "DATA : " + e.target.value
})

// color.addEventListener("focus", (e) => {
//     console.log(e.target.value)
//     document.body.style.backgroundColor = e.target.value
// })
// color.addEventListener("blur", (e) => {
//     console.log(e.target.value)
//     document.body.style.backgroundColor = e.target.value
// })
// color.addEventListener("change", (e) => {
//     console.log(e.target.value)
//     document.body.style.backgroundColor = e.target.value
// })
// color.addEventListener("input", (e) => {
//     console.log(e.target.value)
//     document.body.style.backgroundColor = e.target.value
// })