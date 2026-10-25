function RemoveElementFromArray(arr , val){
    let x = 0;
    for (let i = 0; i < arr.length; i++) {          // ✓ #1: starts at 0
        if (arr[i] != val) {
            let temp = arr[x];                   // ✓ #2: temp declared and used consistently
            arr[x] = arr[i];
            arr[i] = temp;
            x++;                                     // ✓ #3: runs every time arr[i] != 0, regardless of swap
        }
    }
    arr.length = x;
    return arr.length;


}

console.log(RemoveElementFromArray([2,2,2,1,2,34,8,2,0],2));