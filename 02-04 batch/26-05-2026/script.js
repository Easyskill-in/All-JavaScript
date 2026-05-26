// var findMaxAverage = function (arr, n) {
//     let allsum = []
//     let x = 0;
//     let y = n;
//     let sum = 0;
//     let i = 0;
//     while (y != arr.length + 1) {
//         i++;
//         while (x != y) {
//             sum += arr[x];
//             x++;
//         }
//         x = i;
//         y++;
//         console.log({ sum, avg: sum / 4, i })
//         allsum.push(sum / 4)
//         sum = 0;
//     }

//     console.log(Math.max(...allsum))
//     //   console.log(sum/4)
//     //   console.log(sum)

//     return Math.max(...allsum)
// };

// console.log(findMaxAverage([5], 1))




/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    let NA = []
    let key = 32;
    let arr = s.split('').map(v => v.charCodeAt(0))
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) == key) {
            NA.push([i, i + 1])
        }

    }
    NA = [...new Set(NA.flat())]
    arr = arr.map(v => String.fromCharCode(v))

    return NA.map(v => arr[v]).join("")

};
// console.log(longestNiceSubstring("YazaAay"));


// var longestNiceSubstring = function (s) {
//     let NA = []
//     let key = 32;
//     let arr = s.split('').map(v => v.charCodeAt(0))
//     for (let i = 0; i < arr.length; i++) {
//         if (Math.abs(arr[i] - arr[i + 1]) == key) {
//             console.log(i, i + 1)
//             NA.push([i, i + 1])
//         }

//     }
//     NA = [...new Set(NA.flat())]
//     console.log(NA.map(v => arr[v]))
//     let newNA = NA.map(v => arr[v])
//     let flag = 0;
//     for (let i = 1; i < newNA.length; i++) {
//         if (newNA[0] - newNA[i] == 0 || Math.abs(newNA[0] - newNA[i]) == 32) {
//             console.log("Yes ", newNA[i])
//             flag = i;
//         }

//     }
//     arr = arr.map(v => String.fromCharCode(v))
//     NA.length = flag + 1;
//     return NA.map(v => arr[v]).join("")

// };
// console.log(longestNiceSubstring("cCHh"));
