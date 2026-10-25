function removeLLElement(head, val){
    let prev = null;
    while(head){
        if(head.val === val){
            let temp = head.next;
            head.next = null;
            prev = temp;
            head = prev.next;
        } else{
            prev = head;
            head = head.next;
        }
    }
    return head;
}

function removeLLElement(head, val) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let curr = head;
    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;  // bypass the node
            curr = curr.next;       // move forward
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return dummy.next;              // new head
}