



// const arr = [1, 2, 3, 4, 5, 12, 34, 45, 34,];
// const arr = [1, 2, 3, 4, 5,];

// const Res = arr.reduce((acc, value,) => {

//     return value + acc
// })

//acc=0,acc=acc+1->1,acc=acc+2->3, acc = acc+3 ->6 , acc = acc+4 ->10 , 15


// const arr = [12, 23, 34, 34, 5, 13, 23, 45, 6, 23, 2, 43]

// const Res = arr.reduce((acc, value) => {
//     return acc * value
// })

// console.log(Res)

// const arr = [12, 23, 34, 34, 5, 13, 23, 45, 6, 23, 2, 43,]

// // const res = arr.find((value) => {
// //     return value == 34
// // })
// const res = arr.findLast((value) => {
//     return value == 23
// })
// // const res = arr.findIndex((value) => {
// //     return value == 230
// // })

// // const ans = arr.some((value) => {
// //     return value > 50
// // })
// const ans = arr.every((value) => {
//     return value > 1
// })


// const arr = [1, 2, 3, 4, [3, 2, 4, 12, [2, 3, 4, 5, [1, 2, 2, [2, 2, 2, 2,], 2,], 6]]]
// // // const arr = [1, 2, 3, 4, 3, 2, 4, 12, [2, 3, 4, 5, 6]]

// const flatArr = arr.flat(100)
// console.log(flatArr)

// const newArray = new Set(flatArr)