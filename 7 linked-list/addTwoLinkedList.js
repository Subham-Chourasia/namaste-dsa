function ListNode(val,next){
    this.val = val != undefined ? val : null;
    this.next = next != undefined ? next : null;
}
function addTwoLinkedList(curr1, curr2){
    let carry = 0;
    let dummy = new ListNode();
    let curr = dummy;
    while(curr1 != null || curr2 != null || carry != 0){
        let val1 = curr1 ? curr1.val : 0;
        let val2 = curr2 ? curr2.val : 0;
        let sum = val1 + val2 + carry;
        let newNodeVal = sum % 10;
        carry = Math.floor(sum/10);

        curr.next = new ListNode(newNodeVal);
        if (curr1) curr1 = curr1.next;
        if (curr2) curr2 = curr2.next;
        curr = curr.next;

    }
    return dummy.next;
} 