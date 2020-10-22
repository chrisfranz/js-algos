function Node(value) {
    return {
        value,
        left: null,
        right: null
    }
}

function addNode(value, tree = null) {
    const newNode = new Node(value)

    if (!tree) tree = newNode;

    if (value < tree.value) {
        if (!tree.left) tree.left = newNode;
        else addNode(value, tree.left)
    } 
    if (value > tree.value) {
        if (!tree.right) tree.right = newNode;
        else addNode(value, tree.right)
    }

    return tree;
}


function buildBST(array) {
    return array.reduce((acc, el) => {
        acc = addNode(el, acc)
        return acc
    }, null)
}

function findNodeDepth(tree, value, depth = 0) {
    if (value === tree.value) return depth;

    if (value < tree.value) {
        if (tree.left) {
            return findNodeDepth(tree.left, value, depth += 1)
        } else {
            return false;
        }
    } else {
        if (tree.right) {
            return findNodeDepth(tree.right, value, depth += 1)
        } else {
            return false;
        }
    }
}


const array = [6, 2, 8, 0, 4, 7, 9, 3, 5];

const treeOne = buildBST(array);

const depth = findLCADepth(treeOne, 2, 8)



// console.log('TREE: ', tree)