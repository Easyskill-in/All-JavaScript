// function fn(num) {

//     if (num === 0) {
//         return 0;
//     }
//     if (num === 1) {
//         return 1;
//     }

//     return fn(num - 1) + fn(num - 2)
// }

// 6 ->

// 0 1 1 2 3 5 8 13 21 34 55

// (n-1) + (n-2)
// 6-1 + 6-2 -> 5+4 


// const arr = [12, 45, 7, 23, 8, 23, 9, 34]

// let key = 23



// function fn(arr, key) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === key) {
//             return i
//         }
//     }
// }



const arr = [12, 13, 67, 89, 102, 332]

function binarySearch(arr, key, left, right) {

    let mid = Math.floor((left + right) / 2)
    console.table({ arr, key, left, right, mid })

    if (left > right) {
        return -1   
    }
    if (arr[mid] === key) {
        return mid;
    }

    if (arr[mid] > key) {
        return binarySearch(arr, key, left, mid - 1)
    } else {
        return binarySearch(arr, key, mid + 1, right)
    }
    return -1;
}