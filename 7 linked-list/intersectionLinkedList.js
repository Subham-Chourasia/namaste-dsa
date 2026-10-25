//lc-160
function intersectionLinkedList(headA, headB){
    let initialHeadB = headB;
    while(headA){
        while(headB){
            if(headA === headB){
                return headA;
            }
            headB = headB.next;
        }
        headA = headA.next;
        headB = initialHeadB;
    }
    return null;
}


//optimized
function optiIntersection(headA, headB){
    let store = new Set();
    while(headB){
        if(store.has(headB)){
            store.add(headB);
        }
        headB = headB.next;
    }
    //check for each element of headA if present in store
    while(headA){
        if(store.has(headA)){
            return headA;
        }
        headA = headA.next;
    }
    return null;
}