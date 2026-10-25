function reverseInteger(n){
    let initial = n;
    let isNegative = false;
    if(n < 0) isNegative = true;
    n = Math.abs(n);
    let rev = 0;
    while( n > 0){
        let rem = n %10;
        n = Math.floor(n/10);
        rev = rev*10 + rem;
    }

    return isNegative ? -rev : rev;

}