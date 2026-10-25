function reverseInteger(num){
    let initial = num;
    let rev= 0;
    num = Math.abs(num);
    while(num > 0){
        let rem = num %10;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
    let limit = Math.pow(2,31);
    let result = initial < 0 ? -rev : rev;
    return (result < -limit || result > limit-1) ? 0 : result;
}

console.log(reverseInteger(0));

