// let arr = [2, 12, 9, 4, 6, 5]



// let n = arr.length;


// for (let i = 0; i < n; i++) {

//     for (let j = 0; j < n; j++) {

//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp
//         }
//     }
// }

// const obj = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     object: {
//         name: "Jane",
//         age: 25,
//         city: "Los Angeles"
//     }
// }



// obj.object.age = 27

// console.log(obj.object)
// console.log(obj.object.username)
// console.log(obj.username?.name)

const name = "Username"

const User = {
    name: "Easyskill",
    age: 78,
    fn: function () {
        console.log("Hello From Fn", this)
    },
    greet: () => {
        console.log("Hello ", this)
    },
    a: function () {
        (() => {
            console.log("Hello ", this.name)
        })()
    }
}
