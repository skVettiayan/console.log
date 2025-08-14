/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    debugger
    console.log(s);
    const buildLPS = (str) => {
        const lps = Array(str.length).fill(0);
        let length = 0;
        for (let i = 1; i < str.length; i++) {
            console.log(i,length)
            console.log(str[i],str[length]);
            console.log("length",length)
            while (length > 0 && str[i] !== str[length]) {
                length = lps[length - 1];
            }
            
            if (str[i] === str[length]) {
                length++;
                lps[i] = length;
            }
            console.log(lps)
        }
        return lps;
    };

    const reversed = s.split('').reverse().join('');
    const combined = s + '#' + reversed;
    const lps = buildLPS(combined);
    const longestPrefixLen = lps[lps.length - 1];
    const suffix = s.substring(longestPrefixLen);
    const prefix = suffix.split('').reverse().join('');
    return prefix + s;  

};

// s = "aacecaaa";
// s = "abcd";
// s = "dcbaabcd";
s= "siva";
// s = "";
shortestPalindrome(s);




// /**
//  * @param {string} s
//  * @return {string}
//  */
// var shortestPalindrome = function(s) {    
//     let len = s.length;
//     if(len == 1)
//     return s;
//     let l = 0;
//     palindromeString = "";
//     subStrLen = s.length;
//     let palindrome = true;
//     for (let k = 0; k < subStrLen / 2; k++) {
//         if (s[k] !== s[subStrLen - 1 - k]) {
//             palindrome = false;
//             break;
//         }
//     } 
//     if(palindrome){
//         palindromeString = s;
//         return palindromeString;
//     } else {
                
//         for (let i = 0; i < subStrLen; i++) {            
//             let newStr = s.substring(subStrLen-1-i,subStrLen).split('').reverse().join('') +s;
//             newStrLen = newStr.length;
//             palindrome = true;
//             for (let k = 0; k < newStrLen / 2; k++) {
//                 if (newStr[k] !== newStr[newStrLen - 1 - k]) {
//                     palindrome = false;
//                     break;
//                 }               
//             }  
//              if(palindrome){
//                 return newStr;
//             }          
//         }
//     }
// };