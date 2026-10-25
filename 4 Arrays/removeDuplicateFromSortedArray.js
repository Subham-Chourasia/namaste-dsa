// function removeDuplicateFromSortedArray(arr){
//     let i = 0;
//     let j = 1;
//     while(i < (arr.length - 1) && j<=(arr.length - 1)){
//         if(arr[i] === arr[j]){
//             arr.splice(j, 1);
//         } else {
//             i++;
//             j++;
//         }
//     }
//     return arr;
// }
console.log(removeDuplicateFromSortedArray([1,1,2,2,3,4,5,5,5,5,5]));



////////////////////////// UnSorted Array O(n^2) time complexity ///////////////////////
function removeDuplicateFromSortedArray(arr){
    // for(let i = 0; i < arr.length-1; i++){
    //     if(arr[i] === arr[i+1]){
    //         arr.splice(i+1,1);
    //         i--;
    //     }
    // }
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[x] !== arr[i+1]){
            let temp = arr[x+1];
            arr[x+1] == arr[i+1];
            arr[i+1] = temp;
            x++;
        }
    }
    return x+1;
}


////////////////////////// UnSorted Array O(n) time complexity ///////////////////////
function removeDuplicateFromSortedArray(arr) {
    if (arr.length === 0) return 0;

    let x = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[x] !== arr[i]) {
            x++;
            let temp = arr[x];
            arr[x] = arr[i];
            arr[i] = temp;
        }
    }
    arr.length = x+1;  // drop everything after the unique part
    return arr;
}