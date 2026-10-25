//leetcode 58
function lengthOfLastWord(str) {
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== " ") {
            count++;
        } else if (count !== 0) {
            return count;
        }
    }
    return count;   // <- add this
}