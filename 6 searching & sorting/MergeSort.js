function MergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = MergeSort(arr.slice(0,mid));
    let right = MergeSort(arr.slice(mid));
    return sortArraysAndMerge(left, right);
}

function sortArraysAndMerge(arr1, arr2){
    let arr = [];
    let i = 0, j =0;

    while((i <= arr1.length - 1) && ( j<= arr2.length - 1)){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i]);
            i++;
        } else if(arr2[j] < arr1[i]){
            arr.push(arr2[j]);
            j++;
        }else {
            arr.push(arr2[j]);
            j++;
            i++;
        }
    }

    while (j <= arr2.length - 1){
        arr.push(arr2[j]);
        j++;
    }

    while (i <= arr1.length - 1){
        arr.push(arr1[i]);
        i++;
    }

    return arr;
}

console.log(MergeSort([2,3,43,5,2,42,99,1]));
