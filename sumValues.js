
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
};

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(7)

a.next = b
b.next = c
c.next = d

const sumValues = (head) => {
  let sum = 0
  let current = head
  while(current != null) {
    sum += current.val
    current = current.next
  }

  return sum
};

// RESURSIVE

const sumValues = (head) => {
  if(head === null) return 0
  return head.val + sumValues(head.next)
};


console.log(sumValues(a))