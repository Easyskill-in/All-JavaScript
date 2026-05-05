// function fn (num1,num2){
//     return Math.floor(Math.random() * (num2 - num1 + 1)) + num1
// }

//  let max = arr[0];
//  for(let i = 0; i<arr.length;i++){

//      if(max<arr[i]){
//          max = arr[i];
//      }
//  }

//  console.log(max)

// arr.sort((a,b)=>a-b);
// let SecondMax = arr[arr.length-2];
// console.log(SecondMax);

// arr.sort((a, b) => a - b);
// let secondMin = arr[1]
// console.log(secondMin);

// let arr = [5, 8, 21, 80, 28, 4, 50, 59]

// let min = arr[0];
// let min = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[min] > arr[i]) {
//         min = i
//     }
// }

// console.log("Max Number is ", arr[min])

// let arr = [5, 8, 21, 80]

// // let min = arr[0];
// let max = 0;
// let secondMax = -1;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[max] < arr[i]) {
//         secondMax = max;
//         max = i
//     } else if (arr[i] > arr[secondMax] && arr[i] != arr[max]) {
//         secondMax = i
//     }

// }
// console.log("Max Number is ", arr[max])
// // console.log("Second Max Number is ", arr[secondMax])




// console.log(name.indexOf("love "))//
// console.log(name.indexOf("love "))//
// console.log(name.indexOf("a"))//
// console.log(name.lastIndexOf("a"))//
// console.log(name.includes("love  "))//

// // console.log(name.startsWith("I"));
// console.log(name.endsWith("t"));

// console.log(name.slice(7, 100).includes("a"))


// const name = " Username"
// const pass = "Username  "
let name = "I love JavaScript";

console.log(name.replace("JavaScript", "Java"))
console.log(name.replace("a", "o"))
console.log(name.replaceAll("a", "o"))