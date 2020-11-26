const grid = [
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1],
];

function createCache(array) {
    const cache = [];
    for (let i = 0; i < array.length; i++) {
        cache.push(new Array(array[0].length).fill(0))
    };
    cache[0][0] = 1;
    return cache
}

function findPaths(array) {
    const cache = createCache(array)
    for (let i = 0; i < array[0].length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i - 1 >= 0 && array[i][j] === 1) {
                cache[i][j] += cache[i - 1][j]
            }
            if (j - 1 >= 0 && array[i][j]) {
                cache[i][j] += cache[i][j - 1]
            }
        }
    }
    
    return cache[array.length - 1][array[0].length - 1] > 0;
}

const thereIsAPath = findPaths(grid)

console.log('THERE IS A PATH: ', thereIsAPath)