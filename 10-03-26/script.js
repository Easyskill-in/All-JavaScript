// const arr =
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];


// for (let i = 0; i <= arr.length; i++) {
//     console.log("The Value is : ", arr[i])
// }

// const res = arr.forEach((value, index, array) => {
//     console.log("Value : ", value)
//     console.log("Index : ", index)
//     console.log("Array : ", array)
//     console.log("-------------\n\n")
// })
//[1,4,9,...]
// const res = arr.map((value, index, array) => {
//     console.log("Value : ", value)//3
//     console.log("Index : ", index)//2
//     console.log("Array : ", array)//[A]
//     console.log("-------------\n\n")

//     return value * value//9

// })

//[1]
// const res = arr.filter((value, index, array) => {
//     console.log("Value : ", value)//2
//     console.log("Index : ", index)//1
//     console.log("Array : ", array)//[A]
//     console.log("-------------\n\n")

//     // return value > 10 && value < 15 //2>10
//     return value % 2 == 0 //2>10

// })



// const arr1 =
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];

// let a = arr1[0]
// let b = arr1[2]

// const [a, b, c, d, ...e] = [0, ...arr1];

// const arr3 = [...arr1, ...arr2]
//     .filter(v => typeof (v) !== "string")
//     .map(v => v / 2)
//     .forEach(v => {
//         console.log("Value is : ", v)
//     })

//'A'+5 -> A5 ,


// function A(num) {
//     console.log("A is called with argument: ", num, arguments)
// }

// A(5, 2, 3, 2, 4, 56, 324, 34324)


// const obj = { name: 1, name1: 2, num: 3, num1: 4 }
// const obj = { name: 1, name1: 2, num: 3, num1: 4 }

// let email = "age"

// let value = "MyValue"

// const obj = {
//     name: "Username",
//     age: 56,
//     email: "User@gmail.com",
//     value,
//     age: 99,
//     name:"ABCD"
//     // email
// }

// // obj.name = "ABCD"
// console.log(obj.age)

// obj.age = 16

// console.log(obj.name)

// console.log(obj[email])//age
// console.log(obj["email"])//email

// const arr2 = ['A', 'B', 'C', 'D'];
// let i = 0;
// i++;
// console.log(arr2[i])


// const arr = [
//     1, 2, 3, 4, 4, 5, 65, 4, 234, 23, 4]

// arr.pop();
// arr.shift()

// arr.splice(0,4)
// arr.splice(3,0,99)
// arr.splice(2, 4, 94, 93, 92)



// const arr1 = [1, 2, 3, 4, 5, 6]//6
// const arr2 = ['A', 'B', 'C', 'D']//4
// const arr3 = [...arr1, ...arr2]//10

// const [a, b, c, d, ...e, ...f] = [0, arr2, ...arr1];
// const [a, b, c, d, e, ...f] = [1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D'];

// let a = arr1[0]
// let b = arr1[1]
// let c = arr1[2]

