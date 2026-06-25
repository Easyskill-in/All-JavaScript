// let name = "myname"

// const obj = {
//     name: "username",
//     age: 34,
//     fn: function () {
//         console.log("Hello", this.name)
//     },
//     my: function () {
//         const v = () => {
//             console.log("Hello", this.name)
//         }
//         v()
//     }
// }


function Student(name, age, marks, roll) {
    this.name = name;
    this.age = age;
    this.marks = marks;
    this.roll = roll;

    this.print = () => {
        console.log(name)
        console.log(age)
        console.log(marks)
        console.log(roll)
    }
    
}


const std1 = new Student("A", 1, 1, 1)
const std2 = new Student("B", 2, 2, 2)