// LL- 206
function revLL(head){
    let prev = null, curr = head;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    head = prev;
    return head;
}