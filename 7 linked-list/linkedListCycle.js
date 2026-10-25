// lc-141
function linkedListCycle(head){
    let curr = head;
    let seenNodes = new Set();
    while(curr != null){
        if(seenNodes.has(curr)){
            return true;
        }
        seenNodes.add(curr);
        curr = curr.next;
    }
    return false;
}

//optmizied

function hasCycle(head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;          // move 1 step
        fast = fast.next.next;     // move 2 steps
        if (slow === fast) return true;  // they met → cycle exists
    }

    return false;  // fast reached the end → no cycle
}