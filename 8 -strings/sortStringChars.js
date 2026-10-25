function sortStringChars(str){
    let arr = str.split("");
    for(let i = 0; i< arr.length -1 ; i++){
        for(let j = 0; j < arr.length -1 - i; j++){
            if(arr[j].charCodeAt(0) > arr[j+1].charCodeAt(0)){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr.join("");
}


console.log(sortStringChars("subham"));