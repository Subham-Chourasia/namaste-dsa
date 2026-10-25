function fun(x,n){
    //n is the last number till which we want to print
    if( x > n){
        return;
    }
    console.log(x);
    fun(++x);
}
fun(1, 20); 