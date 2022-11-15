console.log("Hello World");

// Create all nodes
const headNode = {
    value: "Hello",
    next: null
};

const nextNode = {
    value: "World",
    next: null
};

const tailNode = {
    value: "!",
    next: null
}

// Connect Nodes
headNode.next = nextNode;
nextNode.next = tailNode;

console.log(headNode)
console.log(headNode.value)
console.log(headNode.next.value)
console.log(headNode.next.next.value);
console.log(tailNode.next);

const findLastValueInLinkedList = (head) => {
    let currNode = head;
    while (currNode.next !== null) {
        currNode = currNode.next
    };
    return currNode.value;
}

const findLastValueInLinkedListRecursive = (currNode) => {
    // BASE CASE
    if (currNode.next === null) return currNode.value;

    // RECURSIVE CASE
    return findLastValueInLinkedListRecursive(currNode.next);
}

// currNode = { value: 1, next: nextNode };
// currNode = { value: 2, next: lastNode };
// currNode = { value: 3, next: null };

console.log(findLastValueInLinkedList(headNode));