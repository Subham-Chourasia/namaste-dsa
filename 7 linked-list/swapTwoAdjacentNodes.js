//leetcode 24
function swapPairs(head) {
    if (!head || !head.next) return head;

    let newHead = head.next;
    let prevTail = null;
    let curr = head;

    while (curr && curr.next) {
        let first = curr;
        let second = curr.next;
        let nextPair = second.next;

        // swap
        second.next = first;
        first.next = nextPair;

        // connect previous pair to this swapped pair
        if (prevTail) prevTail.next = second;

        prevTail = first;
        curr = nextPair;
    }

    return newHead;
}