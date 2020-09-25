function lengthLongestSubstring(string) {
    

    let longestSubstringLength = 0;
    for (let a = 0; a < string.length; a++) {
        const charSet = new Set();
        for (let i = a; i < string.length; i++) {
            
            if (!charSet.has(string[i])) {
                charSet.add(string[i])
                console.log(charSet.size)
            } else {
                if (charSet.size > lengthLongestSubstring) longestSubstringLength = charSet.size
                break
            }
            
        }

    }
    return longestSubstringLength
}

const result = lengthLongestSubstring('penis');
console.log('result: ', result);
