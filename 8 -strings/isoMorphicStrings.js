function isoMorphicStrings(str1, str2){
    let map1 = new Map();
    let map2 = new Map();

    if(str1.length != str2.length) return false;
    for(let i = 0; i < str1.length; i++){
        
        if(map1.has(str1[i]) && map1.get(str1[i]) !== str2[i]){
            return false;
        } 
       map1.set(str1[i], str2[i]);

        if(map2.has(str2[i]) && map2.get(str2[i]) !== str1[i]){
            return false;
        } 
       map2.set(str2[i], str1[i]);
    }
    return true;
}