//876
function middleOfLinkedList(head){
    let count = 0, curr = head; let size = 0;
    while(curr) {
        size++;
        curr = curr.next;
    }
    let limit =  Math.floor(size / 2);
    curr = head;
    while(count != limit){
        curr = curr.next;
        count++;
    }
    return curr;
}

// ----------------optimized version----------------

function MidLinkedList(head){
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
// A one-pass alternative (fast and slow pointers): move slow one step and fast two steps at a time. When fast reaches the end, 
// slow is at the middle. This version also returns the second middle node for even sizes.

