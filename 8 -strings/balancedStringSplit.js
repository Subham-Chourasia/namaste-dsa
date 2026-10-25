function balancedStringSplit(str){
    let count = 0; 
    let L = 0, R = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "L"){
            ++L;
        } else{
            ++R;
        }
        if(L === R){
            ++count;
            L=R=0;
        }
    }
    return count;
}


//with one temp

function balancedStringSplit(str){
    let count = 0; 
    let temp = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "L"){
            ++temp;
        } else{
            --temp;
        }
        if(temp == 0){
            ++count;
        }
    }
    return count;
}