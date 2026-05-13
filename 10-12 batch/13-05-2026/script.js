// let user = Number(prompt("Enter Number"));

// function singleDigit(num) {
//     let sum = 0;

//     while (num !== 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }

//     if (sum > 9) {
//         return singleDigit(sum);
//     }

//     return sum;
// }

// console.log(singleDigit(user));

const box = document.createElement("div");

box.classList.add("box");
box.style.width = "800px";
box.style.height = "800px";
box.style.backgroundColor = "red";
box.style.margin = "20px";

document.body.appendChild(box);

let currentBox = box;

const button = document.querySelector("button");
const removeButton = document.querySelectorAll("button")[1];

const colors = ["black", "white", "yellow", "green", "pink"];

function randomNum(n) {
    return Math.floor(Math.random() * n);
}

let i = 0;

button.addEventListener("click", () => {

    if (i > colors.length - 1) {
        i = 0;
    }

    console.log("Box");

    const box1 = document.createElement("div");

    box1.classList.add("box1");

    box1.style.width =
        parseInt(currentBox.style.height) / 2 + "px";

    box1.style.height =
        parseInt(currentBox.style.height) / 2 + "px";

    box1.style.backgroundColor = colors[i];
    box1.style.margin = "10px";
    box1.style.border = "1px solid black";

    currentBox.appendChild(box1);

    currentBox = box1;

    i++;
});

removeButton.addEventListener("click", () => {

    if (currentBox === box) {
        return;
    }

    console.log(currentBox.parentElement);

    const temp = currentBox.parentElement;

    currentBox.remove();

    currentBox = temp;
});