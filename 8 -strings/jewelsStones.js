//leetcode 771

function jewelsAndStones(j, s){
    let c = 0;
    let jArr = j.split("");
    let sArr = s.split("");
    for(let i = 0; i < sArr.length; i++){
        if(jArr.includes(sArr[i]))
            c++;
    }
    return c;
}
console.log(jewelsAndStones("aA", "xxxxxxxx"));
//  TC -> O (n*m)


//------------Optimized using set
 
function jewStone(j,s){
    let set =  new Set(j);
    let c = 0;
    for(let i = 0; i < s.length; i++){
        if(set.has(s[i])) c++;
    }
    return c;
}