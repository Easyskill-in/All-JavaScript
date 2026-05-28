// class Student {
//     #key = "value";

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     print() {
//         console.log(this.name)
//         console.log(this.age)
//     }

// }

// const std1 = new Student("User1", 12)

// console.log(std1.#key)
// console.log(std1._key)

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     print() {
//         console.log(this.name)
//         console.log(this.age)
//     }

// }

// const std1 = new Student("User1", 12)



// class A {
//     #data = 0
//     constructor(data) {
//         this.#data = data
//     }

//     getData() {
//         return this.#data
//     }

//     setData(data) {
//         if (data > 18) {
//             this.#data = data
//         }
//         return -1;
//     }
// }


// console.log(A)

// let x = new A(12)
// // console.log(x.#data)
// x.setData(22)
// console.log(x.getData())


// x._data = 67;
// console.log(x)



// class A {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }

//     get Data() {
//         return { name: this.#name, age: this.#age }
//     }
//     set ABCD(data) {
//         if (data.age <= 0) {
//             return;
//         } else {

//             this.#name = data.name;
//             this.#age = data.age;
//         }
//     }
// }


// const B = new A("Easyskill", 78)
// console.log(B)
// B.ABCD = { name: "MYNAME", age: -99 }
// console.log(B.Data)

// class A {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // add(a, b) {
//     //     return a + b;
//     // }

//     add(a, b, c) {
//         if (c === undefined) {
//             return a + b
//         }
//         return a + b + c
//     }

// }

// const x = new A("A", "1")
// console.log(x.add(12, 13, 56))



// class A {
//     age;

//     get age() {
//         return this.age;
//     }

//     set age(age) {
//         this.age = age
//     }
// }

// class B extends A {
//     name;
//     get name() {
//         return this.name;
//     }

//     set name(name) {
//         this.name = name
//     }
// }

// let a = new B()

// let a = new A()
// a.age = 99
// console.log()




