function ListNode(val, next){
    this.val = val != undefined ? val : null;
    this.next = next != undefined ? next : null;
}
// ---------------------Brute force -> 3steps--------------------------
function removeNthNodeFromLL(head, n){
    // Step 1: Reverse the list (✅ same as yours)
    let prev = null;
    let curr = head;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // Step 2: Remove nth node from reversed list
    curr = prev;
    prev = new ListNode();
    prev.next = curr;            // FIX 1: connect dummy to list
    let dummy = prev;
    let count = 1;
    while(curr){                 // FIX 2: check curr, not curr.next
        if(count === n){
            let removed = curr;
            prev.next = curr.next;   // FIX 3 & 4: skip node through prev
            curr = curr.next;        // move curr forward
            removed.next = null;     // ← clean up orphan's pointer
            count++;                 // keep counting to avoid re-matching
        } else{
            prev = curr;             // FIX 5: prev follows curr properly
            curr = curr.next;
            count++;
        }
    }

    // Step 3: Reverse again (✅ same as yours)
    curr = dummy.next;        // FIX 6: skip dummy before reversing so it starts from 1st valid node
    let newHead = null;
    while(curr){
        let nextNode  = curr.next;
        curr.next = newHead;
        newHead = curr;
        curr = nextNode ;
    } 
    
    return newHead;
}


// ---------------------Medium Brute force -> 2steps--------------------------
function removeNthNodeFromLL(head, n){
    let size = 0; let curr = head;
    while(curr){
        size++;
        curr = curr.next;
    }
    curr = head;
    let prev = new ListNode();
    let dummy = prev;
    prev.next = curr;
    let nodeToDelete = size - n + 1;
    let count = 1;
    while(curr){
        if(nodeToDelete === count){
            let temp = curr.next;
            prev.next = temp;
            prev = curr;
            curr = temp;
            return dummy.next;
        } else {
            prev = curr;
            curr = curr.next;
            count++;
        }
    }
}

//Another approach in 2 steps

function removeNthNodeFromLL(head, n){
    let size = 0;
    let sentinel = new ListNode();  
    sentinel.next = head;
    while(head){
        size++;
        head = head.next;
    }
    let prev = sentinel;
    let prevPos = size - n; // the previous node position of the node to be deleted
    for(let i = 0; i < prevPos; i++){
        prev = prev.next;
    }
    // now as i reached the prev element i can just do to remove the next element
    prev.next = prev.next.next;
    return sentinel.next;

}


//optimized using 2 pointer approach

function removeNthNode(head, n){
    let dummy = new ListNode();
    dummy.next = head;
    let firstNode = dummy;
    for(let i = 0; i < n; i++){
        firstNode = firstNode.next;
    }
    let secondNode = dummy;
    while(firstNode.next){
        firstNode = firstNode.next;
        secondNode = secondNode.next;
    }
    secondNode.next = secondNode.next.next;
    return dummy.next;
}