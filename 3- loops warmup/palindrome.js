function palindrome(num){
    if(num < 0) return false;
    let rev = 0;
    let initial = num;
    while (num > 0){
        let rem = num % 10;
        num = Math.floor(num/10);
        rev = rev*10 + rem;
    }
    return( rev === initial) ? true : false;
}

console.log(palindrome(0));
