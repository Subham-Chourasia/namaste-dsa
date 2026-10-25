function MissingNumberInArray(arr){
    let length = arr.length;
    let sum = (length * (length + 1 )/2);
    let ps = 0;
    for(let i  = 0; i < length; i++){
        ps += arr[i];
    }

    return sum - ps;
}