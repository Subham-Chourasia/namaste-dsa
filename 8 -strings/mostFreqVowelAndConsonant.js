function mostFreqVowelAndConsonant(str){
    let map = new Map();
    for(let i = 0; i< str.length; i++){
        if(map.has(str[i])){
            let c = map.get(str[i]);
            map.set(str[i], ++c);
        } else {
            map.set(str[i], 1);
        }
    }
    let countVowel = 0; let countConsonant = 0;
    for(const [key, val] of map){
        if(key == "a" || key == "e" || key == "i" || key == "o" || key == "u"){
            if(countVowel < val){
                countVowel = val;
            }
        } else {
            if(countConsonant < val){
                countConsonant = val;
            }
        }
    }

    return countVowel + countConsonant;
}

console.log(mostFreqVowelAndConsonant("succeaaassesss"));
