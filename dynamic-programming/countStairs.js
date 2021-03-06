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
function countStairs2a(n) {
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

function countStairs2b(n) {
    if (n === 0 || n === 1) return 1;
    
    const cache = [ 1, 1 ];

    let output;

    for (let i = 2; i <= n; i++) {
        output = cache[0] + cache[1];
        cache[0] = cache[1]
        cache[1] = output;
    }

    const [ s, ms ] = process.hrtime(start);
    const { heapUsed } = process.memoryUsage();
    const heapConverted = heapUsed / 1024 / 1024
    console.log(`Runtime: ${s} sec, ${ms / 1000000} ms`)
    console.log(`Memory usage: ${Math.round(heapConverted * 100) / 100} MB`)
    return output;
}

function countStairs3a(n) {
    const cache = [ 1, 1, 2 ];

    if (n < 3) return cache[n];

    let output;

    for (let i = 3; i <= n; i++) {
        output = cache[0] + cache[1] + cache[2];
        cache[0] = cache[1]
        cache[1] = cache[2];
        cache[2] = output;
    }

    const [ s, ms ] = process.hrtime(start);
    const { heapUsed } = process.memoryUsage();
    const heapConverted = heapUsed / 1024 / 1024
    console.log(`Runtime: ${s} sec, ${ms / 1000000} ms`)
    console.log(`Memory usage: ${Math.round(heapConverted * 100) / 100} MB`)
    return output;
}

function countStairs3b(n, k) {
    const cache = [ 1, 1 ];

    if (n < 2) return cache[n];


    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            if (i - j < 0) continue;
            if (!cache[i]) cache[i] = 0;
            cache[i] += cache[i - j]
            // console.log('CACHE: ', cache[i])
        }
    }

    const [ s, ms ] = process.hrtime(start);
    const { heapUsed } = process.memoryUsage();
    const heapConverted = heapUsed / 1024 / 1024
    console.log(`Runtime: ${s} sec, ${ms / 1000000} ms`)
    console.log(`Memory usage: ${Math.round(heapConverted * 100) / 100} MB`)
    console.log('CACHE LENGTH: ', cache.length)
    return cache[n];
}

function countStairs3c(n, k) {
    const cache = new Array(k).fill(0)
    cache[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < k; j++) {
            if (i - j < 0) continue
            console.log(j % k)
            cache[i % k] += cache[Math.abs((i - j) % k)]
        }
        console.log('cache: ', cache)
    }

    const [ s, ms ] = process.hrtime(start);
    const { heapUsed } = process.memoryUsage();
    const heapConverted = heapUsed / 1024 / 1024
    console.log(`Runtime: ${s} sec, ${ms / 1000000} ms`)
    console.log(`Memory usage: ${Math.round(heapConverted * 100) / 100} MB`)
    console.log('CACHE LENGTH: ', cache)
    return cache[n % k];
}

function countStairs3d(n, k, stairs) {
    const cache = new Array(k).fill(0)
    cache[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < k; j++) {
            if (i - j < 0) continue
            console.log(j % k)
            if (stairs[i - 1]) {
                cache[i % k] += cache[Math.abs((i - j) % k)]
            } else {
                cache[i % k] = 0;
            }
        }
        console.log('cache: ', cache)
    }

    const [ s, ms ] = process.hrtime(start);
    const { heapUsed } = process.memoryUsage();
    const heapConverted = heapUsed / 1024 / 1024
    console.log(`Runtime: ${s} sec, ${ms / 1000000} ms`)
    console.log(`Memory usage: ${Math.round(heapConverted * 100) / 100} MB`)
    console.log('CACHE LENGTH: ', cache)
    return cache[n % k];
}

const result = countStairs3d(7, 3, [ true, false, true, false, false, true, true]);
console.log('result: ', result);