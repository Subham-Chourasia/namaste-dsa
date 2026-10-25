function maxConsecutiveOnesInArray(arr) {
    let count = 0, max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
            max = Math.max(max, count);  // update while counting
        } else {
            count = 0;
        }
    }
    return max;
}

maxConsecutiveOnesInArray([0,1,1,0,2,1,1,1,1,8,1,1,1]); // 4
maxConsecutiveOnesInArray([1, 1, 1]);                   // 3