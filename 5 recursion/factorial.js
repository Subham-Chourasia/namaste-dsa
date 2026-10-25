function fact(n){
    if(n === 1) return 1;

    return  n * fact(n-1);
}

console.log(fact(6));

 

// function factorial(num, acc = 1){
//     if(num <= 1) return acc;
//     return factorial(num -1 , acc*num);
// }
// console.log(factorial(6));

// function factorial(num){
//     if(num <= 1) return 1;
//     return num * factorial(num -1);
// }
// console.log(factorial(6));

