// console.log("First Line");

// setTimeout(() => {
//     console.log("Main Line");
// },0)

// console.log("Next Line");



// console.log("First Line");

// setTimeout(() => {
//     console.log("Data Leke Aaaya");
// }, 2000)

// console.log("Next Line");


console.log("First Line");


const value = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(12)
        reject(12)
    }, 2000)

});

value.then((data)=>{
    console.log({data})
}).catch((error)=>{
    console.log({error})
})


// value.catch((error) => {
//     console.log("Catch : ", { error })
// });

// value.then((data) => {
//     console.log("Then : ", { data })
// });

console.log("Next Line");
// const value = new Promise((resolve, reject) => {

//     // const work = 10 * 10 ** 10;
//     // // resolve(work)
//     // reject(work)


// });