function largestOddNumberInString(str){
    for(let i = str.length - 1; i >= 0; i--){
        if(str[i] %2 != 0){
            return str.substring(0, i + 1);
        }
    }
    return "";
}