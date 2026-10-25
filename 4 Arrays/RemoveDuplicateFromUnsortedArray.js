// function removeDuplicateFromUnsortedArray(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) return -1;
//     if (arr.length === 1) return arr;

//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let m = i + 1; m < arr.length; m++) {  // ✅ directly use i+1, no separate j needed
//             if (arr[i] === arr[m]) {
//                 arr.splice(m, 1);
//                 m--;
//             }
//         }
//     }
//     return arr;
// }

// console.log(removeDuplicateFromUnsortedArray([1,2,2,2,3,3,4,5,5,6])); // [1,2,3,4,5,6] ✅
// console.log(removeDuplicateFromUnsortedArray([5,5,5,1,2]));           // [5,1,2] ✅
// console.log(removeDuplicateFromUnsortedArray([3,1,3,2,1]));           // [3,1,2] ✅ unsorted, works correctly


//optimal approach is to sort it first and then remove duplicate

console.log(removeDuplicateFromUnsortedArray([1,2,3,2,1,67,7,2,3]));
// [1, 2, 3, 67, 7]