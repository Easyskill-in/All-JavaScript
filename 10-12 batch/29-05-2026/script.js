// localStorage.setItem("name", "John Doe");
// localStorage.setItem("age", "30");
// localStorage.setItem("city", "New York");

// console.log(localStorage.getItem("name")); // Output: John Doe
// localStorage.setItem("name", "Easyskill")
// localStorage.setItem("name", "Easyskill1")

let a = [1, 2, 3, 4, true, false, [11, 13, 14]]
let USER = [
    { name: "user1", age: 1 },
    { name: "user2", age: 2 },
    { name: "user3", age: 3 },
    { name: "user4", age: 4 },
]

localStorage.setItem("User",
    JSON.stringify(USER))
const data = JSON.parse(localStorage.getItem("User"))

localStorage.setItem("arr", JSON.stringify(a))


console.log(JSON.parse(localStorage.getItem("arr")))
localStorage.removeItem("arr")

// localStorage.clear()