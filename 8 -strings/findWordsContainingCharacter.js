//leetcode 2942
function findWordsContainingCharacter(arr, x){
    let indices = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === x){
                indices.push(i);
                break;
            }
        }
    }
    return indices;
}