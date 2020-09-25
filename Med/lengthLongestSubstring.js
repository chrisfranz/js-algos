function lengthLongestSubstring(string) {
    

    let longestSubstringLength = 0;
    for (let a = 0; a < string.length; a++) {
        let charSet = new Set();
        // console.log('CHAR SET: ', charSet)
        for (let i = a; i < string.length; i++) {
            
            if (!charSet.has(string[i])) {
                charSet.add(string[i]);
            } else if (charSet.has(string[i])) {
                if (charSet.size > longestSubstringLength) longestSubstringLength = charSet.size;
                break
            }

            if (i + 1 === string.length) {
                if (charSet.size > longestSubstringLength) longestSubstringLength = charSet.size;
            }
        }
        
    }
    return longestSubstringLength
}

const result = lengthLongestSubstring('abcdabcde');
console.log('result: ', result);
