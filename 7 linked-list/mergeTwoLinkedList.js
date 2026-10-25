function mergeTwoLinkedList(l1, l2){
    let head = l1;
    if(l1 && l2){
        head = l1;
    }
    if(!l1 && l2){
        return l2;
    }
    if(!l2 && l1){
        return l1;
    }
    let l1Next = null;
    let l2Next = null;
    while(l1.val || l2.val){
        if(l1.next) {
            l1Next = l1.next;
        }
        if(l2.next) {
            l2Next = l2.next;
        }
        if(l1 && l2){
            l1.next = l2;
        }
        if(l1Next){
            l1 = l1Next;
        }
        if(l2.next){
            l2.next = l1;
        }
        if(l2Next){
            l2 = l2Next;
        }
    }
    return head;
}