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

function lengthLongestSubstring2(string) {
    let left = 0;
    let right = 0;

    let lengthLongestSubstring = 0;
    const charSet = new Set();

    let currentLongest = 0;
    while (right < string.length) {
        if (!charSet.has(string[right])) {
            charSet.add(string[right]);
            currentLongest++
            if (currentLongest > lengthLongestSubstring) lengthLongestSubstring = currentLongest;
            right++
        } else {
            while (charSet.has(string[right])) {
                charSet.delete(string[left]);
                currentLongest--
                left++
            }
        }
    }
    return lengthLongestSubstring;
}




const result = lengthLongestSubstring2('abcdcefg');
console.log('result: ', result);
