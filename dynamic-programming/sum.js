function sum(n) {
    const dp = [ 0 ];

    for (let i = 1; i <= n; i++) {
        dp.push(dp[i - 1] + i)
    }
    return dp[n]
}

// const result = sum(333333)
// console.log('result: ', result);


function sum2(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        count += i;
    }

    return count
}

const result = sum2(333333)
console.log('result: ', result);