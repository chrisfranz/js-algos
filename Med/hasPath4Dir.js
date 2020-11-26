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
        cache.push(new Array(array[0].length).fill(false))
    };

    return cache
}

function findPaths(array) {
    const cache = createCache(array)
    return cache
}

function doWork(array, cache, location) {
    
}

const thereIsAPath = findPaths(grid)

console.log('THERE IS A PATH: ', thereIsAPath)