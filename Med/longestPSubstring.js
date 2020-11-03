// left, right pointers starting at opposite ends
// each iteration left increments by 1, right scars down toword left
// if chars at left and right match, start inc/dec left/right toward each other
    // as long as chars are equal, continue

function longestPSubstring(string) {
    let left = 0;
    let right = string.length - 1;

    let output = string[0];

    while (left < right) {
        
        let r2 = right;
        
        while(left < r2) {
            while (string[left] !== string[r2]) r2--
            console.log('inner: ', left, right, r2)
            if (string[left] === string[r2] && left !== r2) {
                const subString = string.slice(left, r2 + 1)
                const result = isPalindrome(subString)
                if (result && result.length > output.length) {
                    output = result
                } else {
                    
                }
            }
        }
        left++
        right = string.length - 1;
        r2 = string.length - 1;
        console.log(left, right, r2)
    }
    return output;
}


function isPalindrome(string) {
    let left = 0;
    let right = string.length - 1;

    while(left < right) {
        if (string[left] !== string[right]) {
            return false;
        } else {
            left++
            right--
        }
    }
    return string;
}



function longestPSubstring2(string) {
    let lss = [0, 1];

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            const [l, r] = isPalindromeDivEven(string, i);
            if (r - l > lss[1] - lss[0]) lss = [l,r];
        }
        const [l, r] = isPalindromeDivOdd(string, i);
        if (r - l > lss[1] - lss[0]) lss = [l,r]
    }
    return string.slice(lss[0], lss[1]);
}

function isPalindromeDivOdd(string, index) {
    let left = index - 1;
    let right = index + 1;

    while (left > -1 || right < string.length) {
        if (string[left] === string[right]) {
            left--;
            right++;
        } else {
            return [left + 1, right]
        }
    }
    return [left + 1, right]
}

function isPalindromeDivEven(string, index) {
    let left = index - 1;
    let right = index + 2;

    while (left > -1 || right < string.length) {
        if (string[left] === string[right]) {
            left--;
            right++;
        } else {
            return [left + 1, right]
        }
    }
    return [left + 1, right]
}

const string = "aacabdkacaa"

const result = longestPSubstring2('kccabaabac', 3)

console.log('RESULT: ', result)