function fib(n) {
    const memo = [ 1, 1 ];

    function innerFib(n) {
        if (n === 0 || n === 1) return memo[n];
        if (memo[n]) return memo[n]
        memo[n] = innerFib(n - 1) + innerFib(n - 2)
        return memo[n];
    }

    return innerFib(n);
}

const result = fib(8)

console.log('FIB: ', result)