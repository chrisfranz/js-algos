// Time O(n), Space O(n)

function countStairs(n) {
    const cache = [ 1, 1 ];

    if (n <= 1) return cache[n]

    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2]
    }

    return cache[n]
}
// Time O(n), Space O(1)
function countStairs2(n) {
    if (n <= 1) return 1;
    
    let a = 1;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        const current = a + b;
        a = b
        b = current
    }
    return b;
}
// Time O(n), Space O(n)
function countStairsNK(n, k) {
    const cache = new Array(n + 1).fill(0)
    cache[0] = 1;
    cache[1] = 1;

    if (n <= 1) return cache[n]

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            if (i - j < 0) continue
            cache[i] += cache[i - j]
        }
        console.log('CACHE: ', cache)
    }
    return cache[n]
}

function countStairsNK(n, k) {
    const cache = new Array(n + 1).fill(0)
    cache[0] = 1;
    cache[1] = 1;

    if (n <= 1) return cache[n]

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            if (i - j < 0) continue
            cache[i] += cache[i - j]
        }
        console.log('CACHE: ', cache)
    }
    return cache[n]
}

function countStairsNKs1(n, k) {
    const cache = new Array(n + 1).fill(0)
    cache[0] = 1;

    if (n <= 1) return cache[n]

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < k; j++) {
            if (i - j < 0) continue
            cache[i % k] += cache[(i - j) % k]
        }
        console.log('CACHE: ', cache)
    }
    return cache[n % k]
}

function countStairsNKRS(n, k, rs) {
    const cache = new Array(k).fill(0)
    cache[0] = 1;

    if (n <= 1) return cache[n]

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < k; j++) {
            if (i - j < 0) continue

            if (rs.includes(i)) {
                cache[i % k] = 0
            } else {
                cache[i % k] += cache[(i - j) % k]
            }
        }
        console.log('CACHE: ', cache)
    }
    return cache[n % k]
}

const result = countStairsNKRS(7, 3, [1, 3, 4]);

console.log('RESULT: ', result)