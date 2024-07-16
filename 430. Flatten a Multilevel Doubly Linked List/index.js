class _Node {
    constructor(val, prev, next, child) {
        this.val = val;
        this.prev = prev || null;
        this.next = next || null;
        this.child = child || null;
    }
}

/**
 * @author maneeshavenigalla
 * You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child 
 * pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children 
 * of their own, and so on, to produce a multilevel data structure as shown in the example below. Given the head of the first level of the list, flatten 
 * the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should 
 * appear after curr and before curr.next in the flattened list. Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.
 * @param {_Node} head
 * @return {_Node}
 */
const flatten = (head) => {
    let current = head;

    while (current) {
        if (current.child) {
            let next = current.next;
            let child = current.child;

            current.next = flatten(current.child);
            current.child = null;
            child.prev = current;


            while (child.next) {
                child = child.next;
            }

            child.next = next;
            if (next) {
                next.prev = child;
            }
        }
        current = current.next;
    }

    return head;
};

module.exports = { flatten, _Node };