//leetcode 344

function reverseString(arr){
    for(let i = 0; i< Math.floor(arr.length/2); i++){
        let temp = arr[arr.length -1 -i];
        arr[arr.length -1 -i] = arr[i];
        arr[i]= temp;
    }

    return arr;
}