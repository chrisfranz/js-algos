function countStairs(n) {
    const values = [ 0, 1 ];

    for (let i = 2; i <= n; i++) {
        values[i] = values[i - 1] + values[i - 2];
    }

    return values[n];
}

const result = countStairs(40);
console.log('result: ', result);