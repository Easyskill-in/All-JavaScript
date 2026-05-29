class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


let n1 = new Node(4)
let n2 = new Node(2)
let n3 = new Node(1)
let n4 = new Node(3)

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


// n1 = append(n1, 191)
// n1 = append(n1, 201)


function preppend(head, data) {
    const newNode = new Node(data)
    newNode.next = head;
    return newNode
}

// n1 = preppend(n1, 1991)


function deleteAtEnd(head) {
    let temp = head;

    while (temp.next.next != null) {
        temp = temp.next
    }
    temp.next = null

}

function rev(head) {
    let current = head;
    let prev = null;
    let next = null;

    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current
        current = next

    }
    return prev
}




var sortList = function (head) {
    if (head == null || head.next == null) {
        return head
    }

    let x = head;
    let count = 0;
    while (x) {
        count++;
        x = x.next;
    }
    console.log({ count })

    for (let i = 0; i < count; i++) {
        let i = head;


        while (i) {
            if (i.data > i.next?.data) {
                let x = i.data;
                console.log("X : ", x, "I.Next : ", i.next.data)
                i.data = i.next?.data;
                i.next.data = x
            }
            i = i.next;
        }
        // i = head;
    }
    return head

};



print(n1)
n1 = sortList(n1)
print(n1)
