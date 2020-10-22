// function Node(value) {
//     return {
//         value,
//         left: null,
//         right: null
//     }
// }

// function addNode(value, tree = null) {
    
//     if (!tree) return new Node(value);

//     if (value < tree.value) {
//         if (!tree.left) {
//             tree.left = new Node(value)
//         }
//         else return addNode(value, tree.left)
//     } else {
//         if (!tree.right) {
//             tree.right = new Node(value)
//         }
//         else return addNode(value, tree.right)
//     }
//     return tree
// }

// function buildTreeFromArray(array) {
//     return array.reduce((acc, el) => {
//         acc = addNode(el, acc)
//         return acc;
//     }, null)
// }

// const tree = buildTreeFromArray([6, 2, 8, 0, 4, 7, 9, 3, 5])

// console.log('tree: ', tree)

// const tree = null;
// const tree1 = addNode(6, tree)
// const tree2 = addNode(2, tree1)
// const tree3 = addNode(8, tree2)
// const tree4 = addNode(0, tree3)
// const tree4 = addNode(0, tree3)


// console.log('tree: ', tree3)

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    addNode(value) {
        const newNode = new BST(value)

        if (value < this.value) {
            if (!this.left) {
                this.left = newNode
            } else {
                this.left.addNode(value)
            }
        } else {
            if (!this.right) {
                this.right = newNode
            } else {
                this.right.addNode(value)
            }
        }
        return this
    }

    findLCADepth(a, b, depth = 0) {
        if (a < this.value && b < this.value) {
            return this.left.findLCADepth(a, b, depth += 1)
        }
        if (a > this.value && b > this.value) {
            return this.right.findLCADepth(a, b, depth += 1)
        }
        return depth;
    }

    findNodeDepth(value, depth = 0) {
        if (value < this.value && this.left) {
            return this.left.findNodeDepth(value, depth += 1)
        } else if (value < this.value && !this.left) {
            return -1;
        }

        if (value > this.value && this.right) {
            return this.right.findNodeDepth(value, depth += 1)
        } else if (value > this.value && ! this.right) {
            return -1
        }

        return depth;
    }

    findDistanceBetweenTwoNodes(a, b) {
        const depthA = this.findNodeDepth(a)
        const depthB = this.findNodeDepth(b)

        if (depthA === -1 || depthB === -1) return null;

        const depthLCA = this.findLCADepth(a, b);

        return depthA + depthB - (2 * depthLCA)
    }

}

const tree = new BST(6);
tree.addNode(2)
tree.addNode(8)
tree.addNode(0)
tree.addNode(4)
tree.addNode(7)
tree.addNode(9)
tree.addNode(3)
tree.addNode(5)

const depth = tree.findNodeDepth(12)

const lca = tree.findLCADepth(2, 0)

const nodeDistance = tree.findDistanceBetweenTwoNodes(, 9)

console.log(nodeDistance)