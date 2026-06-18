let arr = [1, 7, 8, 12, 19, 34, 67]




function binarySearch(arr, target, low, high) {
    let mid = Math.floor((low + high) / 2)
    if (low <= high) {
        if (arr[mid] === target) {
            return mid
        }


        if (arr[mid] > target) {
            return 
            binarySearch(arr, target, low, mid - 1)
        } else {

            return 
            binarySearch(arr, target, mid + 1, high)
        }
    }
    return -1;
}


// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)

//         if (arr[mid] === target) {
//             return mid
//         }

//         if (arr[mid] > target) {
//             high = mid - 1
//         } else {
//             low = mid + 1
//         }
//     }
//     return -1;
// }

