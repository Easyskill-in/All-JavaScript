class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


let n1 = new Node(12)
let n2 = new Node(13)
let n3 = new Node(15)
let n4 = new Node(99)

n1.next = n2;
n2.next = n3
n3.next = n4


function print(head) {
    while (head != null) {
        console.log(head.data)
        head = head.next
    }
}

function append(head, data) {
    let temp = head;
    const newNode = new Node(data)
    while (temp.next != null) {
        temp = temp.next;
    }
    temp.next = newNode
    return head
}


n1 = append(n1, 191)
n1 = append(n1, 201)


function preppend(head, data) {
    const newNode = new Node(data)
    newNode.next = head;
    return newNode
}

n1 = preppend(n1, 1991)


function deleteAtEnd(head) {
    let temp = head;

    while (temp.next.next != null) {
        temp = temp.next
    }
    temp.next = null

}