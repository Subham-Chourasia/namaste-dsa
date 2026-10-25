function isAnagram1(str1, str2){
    if(str1.length != str2.length) return false;
    let map1 = new Map();
    let map2 = new Map();

    for(let i = 0; i < str1.length; i++){
        if(map1.has(str1[i])){
            let map1Val = map1.get(str1[i]);
            map1.set(str1[i], ++map1Val);
        } else{
             map1.set(str1[i], 1);
        }
    }

    for(let i = 0; i < str2.length; i++){
        if(map2.has(str2[i])){
            let map2Val = map2.get(str2[i]);
            map2.set(str2[i], ++map2Val);
        } else{
             map2.set(str2[i], 1);
        }
    }
    console.log(map1, "map1");
    console.log(map2, "map2");
    if(map1.size != map2.size)  return false;

    for(let [key,val] of map1){
        if(!map2.has(key) || map2.get(key) != val){
            return false;
        }
    }
    return true;
}

console.log(isAnagram("dgqztusdjuu", "dqugjzutsu"));


//Approach-2
function isAnagram(str1, str2){
    if(str1.length != str2.length) return false;
    let map = new Map();
    for(let i = 0; i< str1.length; i++){
        map.set(str1[i], (map.get(str1[i]) || 0) + 1);
        map.set(str2[i], (map.get(str2[i]) || 0) - 1);
    }

    for(let [key,values] of map){
        if(values != 0){
            return false;
        }
    }
    return true;
}

//approach-3
function isAnagram3(str1, str2){
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}