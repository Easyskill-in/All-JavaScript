// // const arr = [1,2,,3,44]
// const arr = ["name", 18]

// arr[1] = 28

// // console.log(arr[0])
// // console.log(obj["key name"])

// // console.log(obj.name)

// const obj = {
//     name: "USERNAME",
//     age: 18
// }

// // obj.age = 28
// // obj["age"] = 988

// // arr[arr.length] = 72354;

// /*
// obj.email = "easyskill@gmail.com"
// 'easyskill@gmail.com'
// obj
// {name: 'USERNAME', age: 18, email: 'easyskill@gmail.com'}
// */

// // obj["user name"] = "Saurabh"




// newObj.a = 390;
// newObj.name = "Username"

// // console.log(delete newObj.a)
// console.log(newObj)

// //newName

// /*
// newObj
// newObj.newName = obj.name
// 'USERNAME'
// newObj
// {newName: 'USERNAME'}
// */

const newObj = {
    name: "User",
    age: 78,
    name: "Easyskill",
    a: 90,
    name: "Username"
}

const obj = {
    ...newObj,
    a: [12, 23, 456, 34],
    b: {
        name: "Bname",
        age: 13,
        arr: [99, 12, 234, 45, 23, true, false]
    },
    c: function () {
        console.log("Hello World")
    },
}

// const [a,b,c] = [1,2,3]
// const { a, b, c } = obj


// obj.b.age = 39

// obj.b.arr[5] = false;
// obj.b.arr[6] = true;


// const { a, b: { age, name }, c } = obj