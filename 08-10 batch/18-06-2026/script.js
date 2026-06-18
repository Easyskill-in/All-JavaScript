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

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x > pivot);
    const equal = arr.filter(x => x === pivot);

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

console.log(quickSort([5, 2, 8, 1, 9]));



function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    const merged = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length)
        merged.push(left[i] < right[j] ? left[i++] : right[j++]);

    return [...merged, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([5, 2, 8, 1, 9]));