/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {  
let len = s.length;
    if(len == 1)
    return s;
    let l = 0;
    for ( let i =0 ;i<s.length;i++){
        if(s[i] != s[0]){
            l = 1;
            break
        }
    }
    if(l == 0){
        return s;
    }
    palindromeString = "";
    for(let j = 2; j <= len; j++) {
        for (let i = 0; (i < (i+j) && (i+j) <=len); i++) {
            subStr = s.substring(i,i+j)
            subStrLen = subStr.length;
            let palindrome = true;
            for (let k = 0; k < subStrLen / 2; k++) {
                if (subStr[k] !== subStr[subStrLen - 1 - k]) {
                    palindrome = false;
                    break;
                }
            }            
            if(palindrome){
                palindromeString = subStr;
                palindrome  = true
                break;
            }
        }
    }
    if(palindromeString == "")
        return s[0];
    return palindromeString;
}

s = "sivis";
console.log(longestPalindrome(s));


/*
var longestPalindrome = function(s) {    
    let len = s.length;
    if(len == 1)
    return s;
    let l = 0;
    for ( let i =0 ;i<s.length;i++){
        if(s[i] != s[0]){
            l = 1;
            break
        }
    }
    if(l == 0){
        return s;
    }
    palindromeString = "";
    for(let j = 2; j <= len; j++) {
        for (let i = 0; (i < (i+j) && (i+j) <=len); i++) {
            subStr = s.substring(i,i+j)
            subStrLen = subStr.length;
            let palindrome = true;
            for (let k = 0; k < subStrLen / 2; k++) {
                if (subStr[k] !== subStr[subStrLen - 1 - k]) {
                    palindrome = false;
                    break;
                }
            }            
            if(palindrome){
                palindromeString = subStr;
                palindrome  = true
            }
        }
    }
    if(palindromeString == "")
        return s[0];
    return palindromeString;
};
s = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
longestPalindrome(s);

*/

