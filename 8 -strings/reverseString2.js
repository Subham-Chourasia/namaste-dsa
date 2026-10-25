function reverseString2(str, k) {
    let arr = str.split("");
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = Math.min(k + i - 1, arr.length - 1);  // ← clamp to bounds
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join("");
}