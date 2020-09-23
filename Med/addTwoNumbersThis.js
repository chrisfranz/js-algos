function ListNode(val, next) {
    this.val = !val ? 0 : val,
    this.next = !next ? null : next
}

function addNode(val, list = null) {
    if (!list) {
        const newNode = new ListNode(val, null);
        return list = newNode
    }

    let currentNode = list;

    while (currentNode) {
        if (!currentNode.next) {
            currentNode.next = new ListNode(val);
            return list;
        }
        currentNode = currentNode.next;
    }
    return list;
}

function makeListFromArray(array) {
    return array.reduce((acc, el) => {
        acc = addNode(el, acc)
        return acc;
    }, null)
}

const list1 = makeListFromArray([2,5]);
console.log('LIST 1: ', list1)
const list2 = makeListFromArray([3,5]);
console.log('LIST 2: ', list2)

function addLists(l1, l2) {
    let list;
    let current1 = l1;
    let current2 = l2;
    let carry = false;

    while (current1 || current2) {
        let val1 = current1.val || 0;
        let val2 = current2.val || 0;

        const nodeSum = val2 + val2 + (carry ? 1 : 0);

        if (nodeSum > 9) {
            list = addNode(nodeSum - 10, list);
            carry = true;
        } else {
            list = addNode(nodeSum, list);
            carry = false;
        }
        current1 = current1.next || null;
        current2 = current2.next || null;
    }
    if (carry) {
        list = addNode(1, list);
    }
    return list;
}

const result = addLists(list1, list2);

console.log('RESULT: ', result)