const process = require('process')

const start = process.hrtime();


// Time O(n), Space O(n)
function countStairs(n) {
    const values = [ 1, 1 ];

    for (let i = 2; i <= n; i++) {
        values[i] = values[i - 1] + values[i - 2];
    }

    const [ s, ms ] = process.hrtime(start);
    const { heapUsed } = process.memoryUsage();
    const heapConverted = heapUsed / 1024 / 1024
    console.log(`Runtime: ${s} sec, ${ms / 1000000} ms`)
    console.log(`Memory usage: ${Math.round(heapConverted * 100) / 100} MB`)
    return values[n];
}


// Time O(n), Space O(1)
function countStairs2(n) {
    if (n === 0 || n === 1) return 1;
    
    let a = 1, b = 1;

    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b
        b = c
    }

    const [ s, ms ] = process.hrtime(start);
    const { heapUsed } = process.memoryUsage();
    const heapConverted = heapUsed / 1024 / 1024
    console.log(`Runtime: ${s} sec, ${ms / 1000000} ms`)
    console.log(`Memory usage: ${Math.round(heapConverted * 100) / 100} MB`)
    return c;
}




const result = countStairs2(40000000);
console.log('result: ', result);