//lc-234
function palindromeLinkedList(head){
    let curr = head;
    let temp = [];
    while(curr != null){
        temp.push(curr.val);
        curr= curr.next;
    }
    let limit = Math.floor(temp.length/2);
    for(let i =0; i< limit; i++){
        if(temp[i] != temp[temp.length -1 -i]){
            return false;
        }
    }
    return true;
 }
//  TC-> O(n) + O(n) = O(n)
//  SC-> O(n)


// ->Optimized version
function OptimizedPLL(head) {
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let curr = slow, prev = null;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    let frontElem = head;
    let backElem = prev;
    while (backElem != null) {          // fixed condition
        if (frontElem.val != backElem.val) {
            return false;
        }
        backElem = backElem.next;
        frontElem = frontElem.next;
    }
    return true;                         // added
}