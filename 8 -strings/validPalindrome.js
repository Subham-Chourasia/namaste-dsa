//lc-125
//approach-1  Time comp -> O(n) && space comp is O(n)
function validPalindrome(str){
    str = str.trim().toLowerCase();
    str = str.replace(/[^a-z0-9A-Z]/g, "");

    let arr = str.split("");
    let left = 0, right = arr.length-1;

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    console.log(arr);
    return str === arr.join("");

}

console.log(validPalindrome("A man, a plan, a canal: Panama"));


//approach-2 Time comp -> O(n*n) && space comp is O(n)
function validPalindrome2(str){
    let filteredString = "";
    let rev = "";
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i].match(/[a-zA-Z0-9]/)){
            filteredString = filteredString + str[i];
            rev = str[i] + rev;
        }
    }
    return filteredString === rev;
}

//approach -3 Time comp -> O(n) && space comp is O(1)
function validPalindrome3(str){
    str = str.toLowerCase();
    if(str.length == 1) return true;
    let start = 0;
    let end =str.length - 1;
    while(start < end){
        if(!str[start].match(/[a-z0-9]/)){
            start++;
            continue;
        }
        if(!str[end].match(/[a-z0-9]/)){
            end--;
            continue;
        }
        if(str[start] != str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;

}