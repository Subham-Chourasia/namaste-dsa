function sumOfNnumbers(n){
    if(n == 1) return 1;
    if(n <= 0) return n;

    return n + sumOfNnumbers(n-1);
}
console.log(sumOfNnumbers(10));
 