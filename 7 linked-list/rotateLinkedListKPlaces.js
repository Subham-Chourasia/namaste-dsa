function rotateLinkedListKPlaces(head, k) {
    if (!head || !head.next) return head;

    let curr = head;
    let size = 0;
    while (curr) {
        size++;
        curr = curr.next;
    }

    k = k % size;
    if (k === 0) return head;  // no rotation needed

    curr = head;
    let count = 0;
    while (curr && count < size - k - 1) {  // < not <=
        curr = curr.next;
        count++;
    }

    let newHead = curr.next;
    curr.next = null;
    curr = newHead;
    while (curr && curr.next) {
        curr = curr.next;
    }
    curr.next = head;

    return newHead;
}


//another approach

function rotateLinkedList(head, k){
    if(!head || !head.next) return head;

    let size = 0; let curr = head;
    while(curr){
        size++;
        curr = curr.next;
    }
    let s = head, f = head;
    for(let i = 0; i < k; i++){
        f = f.next;
    }
    k = k%size;
    while(f.next){
        s= s.next;
        f = f.next;
    }
    f.next = head;
    let newHead = s.next;
    s.next = null;
    return newHead;
}