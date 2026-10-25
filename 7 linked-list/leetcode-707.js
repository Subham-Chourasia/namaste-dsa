//lc-707

function ListNode(val, next){
    this.val = val != undefined ? val: null;
    this.next = next != undefined ? next: null;
}

function MyLinkedList(){
    this.head = null;
}

MyLinkedList.prototype.get = function(index) {
    let curr = this.head;
    let c = 0;
    if(index == 0) return curr ? curr.val : -1;
    while(c!= index && curr){
        curr = curr.next;
        c++;
    }
    if(curr){
        return curr.val;
    }
    return -1;
};

MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val, this.head);
    this.head = node;
};

MyLinkedList.prototype.addAtTail = function(val) {
    if(!this.head){
        this.head = new ListNode(val);
        return;
    }
    let newNode = new ListNode(val);
    let curr = this.head;
    while(curr.next){
        curr = curr.next;
    }
    curr.next = newNode;
};

// ------------------better Time complexity---------------
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new ListNode(val);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    this.size++;
};
// -------------------------------------------------------

MyLinkedList.prototype.addAtIndex = function(index, val) {
    let curr = this.head;
    let size = 0;
    while(curr){
        ++size;
        curr = curr.next;
    }
    if(index > size) return;


    if(index === 0){
        let newNode = new ListNode(val, this.head);
        this.head = newNode;
        return;
    }
    if(index == size){
        let curr = this.head;
        while(curr.next){
            size++;
            curr = curr.next;
        }
        curr.next = new ListNode(val);
        return;
    }
    let count = 0;
    curr = this.head;
    while(count < index - 1 && curr.next){
        curr = curr.next;
        count++;
    }

    let newNode = new ListNode(val, curr.next);

    curr.next = newNode;
};


// ------------------------------------better optimized time complexity-----------------------------------------------
// Here is a version that handles insertion at the head, middle, and tail without calculating the size.
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0) return;

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    let curr = this.head;
    let count = 0;

    while (curr && count < index - 1) {
        curr = curr.next;
        count++;
    }

    // The requested index is out of range.
    if (!curr) return;

    let newNode = new ListNode(val, curr.next);
    curr.next = newNode;
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

MyLinkedList.prototype.deleteAtIndex = function(index) {
    let curr = this.head;
    let size = 0;
    while(curr){
        ++size;
        curr = curr.next;
    }
    if(size === 0) return;
    if(index >= size){
        return -1;
    }
    curr = this.head;
    if(index == 0){
        let temp = curr.next;
        curr.next = null;
        this.head = temp;
    } else {
        let count = 0;
        while(count < index - 1){
            curr = curr.next;
            count++;
        }
        curr.next =  curr.next.next;
    }

};
