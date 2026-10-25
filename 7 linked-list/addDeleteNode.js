
//leetcode 707
function Node(val){
    this.val = val;
    this.next = null;
}

function myLinkedList(){
    this.head = null;
    this.size = 0;
}

myLinkedList.prototype.addNewNodeAtHead = function(val){
    let newNode = new Node(val);
    if (this.head == null){
        this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.size++;
}

myLinkedList.prototype.addNewNodeAtTail =  function(val){
    let newNode = new Node(val);
    if (this.head == null){
        this.head = newNode;
    } else {
        let curr = this.head;
        while (curr.next != null){
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.size++;
}

myLinkedList.prototype.addNewNodeAtIndex =  function(val, index) {
    let newNode = new Node(val);
    if(index  < 0 || index > this.size) return -1;
    if (this.head == null || index == 0){
         this.head = newNode;
    } else if (index == this.size){
        let curr = this.head;
        while(curr.next != null){
            curr = curr.next;
        }
        curr.next = newNode;
    } else{
        let count = 0;
        let curr = this.head;
        while(count < index - 1){
            curr = curr.next;
            count++;
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }
    this.size++;
}

myLinkedList.prototype.deleteNodeAtIndex = function(index) {
    if(index < 0 || index >= this.size){
        return -1;
    }

    if (index === 0){
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
    } else {
        let count = 0;
        let curr = this.head;
        while(count < index - 1 ){
            curr = curr.next;
            count++;
        }
        let temp = curr.next.next;
        curr.next.next = null;
        curr.next = temp; // When it's the tail, curr.next.next is null, so curr.next = null happens naturally.

    }
    this.size--;
}
myLinkedList.prototype.getValueAtIndex = function(index){
    if (index < 0 || index >= this.size){
        return -1;
    }

    if(index === 0){
        return this.head.val;
    } else if (index === this.size - 1){
        let curr = this.head;
        while (curr.next != null){
            curr = curr.next;
        }
        return curr.val;
    } else {
        let count = 0;
        let curr = this.head;
        while(count != index){
            curr = curr.next;
            count++;
        }
        return curr.val;
    }

}

