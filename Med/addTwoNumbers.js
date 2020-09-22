/*
    Add Two Linked Lists

    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.
*/

function newNode(val) {
    return { val, next: null }
}

function addNode(list = null, value) {
    if (!list) return newNode(value);

    let currentNode = list;

    while (currentNode) {
        if (!currentNode.next) {
            currentNode.next = newNode(value);
            return list
        }
        currentNode = currentNode.next;
    }
    return list;
}


function makeListFromArray(array) {
    return array.reduce((acc, val) => {
        acc = addNode(acc, val);
        // console.log('acc: ', acc);
        return acc;
    }, null);
}

const list1 = makeListFromArray([4, 0, 4])
const list2 = makeListFromArray([3, 3, 5]);
const list3 = makeListFromArray([6, 3, 5]);
const list4 = makeListFromArray([6, 6, 2]);


function addListsWithArray(l1, l2) {
    const nodeSums = [];
    let currentNode1 = l1 || null;
    let currentNode2 = l2 || null;
    let carry = false;

    while (currentNode1 || currentNode2) {
        let val1 = currentNode1.val || 0;
        let val2 = currentNode2.val || 0;

        const nodeSum = val1 + val2 + (carry ? 1 : 0);

        if (nodeSum > 9) {
            nodeSums.push(nodeSum)
            carry = true;
        } else {
            nodeSums.push(nodeSum);
            carry = false;
        }
        currentNode1 = currentNode1.next || null;
        currentNode2 = currentNode2.next || null;
    }
    if (carry) nodeSums.push(1);

    return makeListFromArray(nodeSums)
}

// const result = addListsWithArray(list3, list4);
// console.log('result: ', result);


function addLists(l1, l2) {
    let output;
    let currentNode1 = l1 || null;
    let currentNode2 = l2 || null;
    let carry = false;

    while (currentNode1 || currentNode2) {
        let val1 = currentNode1.val || 0;
        let val2 = currentNode2.val || 0;

        const nodeSum = val1 + val2 + (carry ? 1 : 0);

        if (nodeSum > 9) {
            output = addNode(output, nodeSum - 10)
            carry = true;
        } else {
            output = addNode(output, nodeSum)
            carry = false;
        }
        currentNode1 = currentNode1.next || null;
        currentNode2 = currentNode2.next || null;
        console.log('OUTPUT: ', output)
    }
    if (carry) output = addNode(output, 1)
    return output;
}

const result = addLists(list3, list4);
console.log('result: ', result);