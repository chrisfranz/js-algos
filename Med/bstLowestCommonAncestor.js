eclass BST {
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

const nodeDistance = tree.findDistanceBetweenTwoNodes(2, 0)

console.log(nodeDistance)