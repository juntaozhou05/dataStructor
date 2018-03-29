//判断点是否在多边形里面
function isIn() {
  let c = false;
  let nvert = this.data.polyline[0].points;
  let testx = this.data.markers[0].latitude;
  let testy = this.data.markers[0].longitude;
  for (let i = 0; i < nvert.length; i++) {
    for (let j = 0; j < nvert.length - 1; j = i++) {
      if (
        nvert[i].longitude > testy != nvert[j].longitude > testy &&
        testx <
        (nvert[j].latitude - nvert[i].latitude) *
        (testy - nvert[i].longitude) /
        (nvert[j].longitude - nvert[i].longitude) +
        nvert[i].latitude
      )
        c = !c;
    }
  }
  console.log(c);
}

//单链表操作
function Node(element) {
  this.element = element;
  this.next = null;
}
function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}
function find(val) {
  let current = this.head;
  while (current.element !== val) {
    current = current.next;
  }
  return current.element;
}

function insert(target, val) {
  let newNode = new Node(target);
  let current = find(val);
  newNode.next = current.next;
  current.next = newNode;
}

function findPrevious(val) {
  let current = this.head;
  while (current.next !== null) {
    if (current.next.element !== val) {
      current = current.next;
    }
    return current;
  }
}

function remove(val) {
  let preNode = findPrevious(val);
  if (preNode.next !== null) {
    preNode.next = preNode.next.next;
  }
}

function display() {
  let current = this.head;
  while (current.next !== null) {
    console.log(current.element);
    current = current.next;
  }
}

//查找单链表二分之一的元素
function findHalf() {
  let mid = this.head;
  let search = this.head;
  while (search.next !== null) {
    if (search.next.next !== null) {
      search = search.next.next;
      mid = mid.next;
    } else {
      search = search.next;
    }
  }
  return mid.element;
}

//循环链表
function LList() {
  this.head = new Node("head")
  this.head.next = this.head
  this.find = dFind
  this.insert = dInsert
  this.remove = dRemove
  this.display = dDistplay
}

function dFind(val) {
  let current = this.head
  while (current.next !== null && current.next.element !== "head") {
    current = current.next
  }
  return current.element
}

function dInsert(target, val) {
  let newNode = new NOde(val)
  let current = dFind(target)
  newNode.next = current.next
  current.next = newNode
}

function findPre(val) {
  let current = this.head
  while (current.next !== null && current.next.element !== "head") {
    if (current.next.element !== val) {
      current = current.next
    }
    return current
  }
}

function dRemove(val) {
  let current = findPre(val)
  if (current.next !== null && current.next.element !== "head") {
    current.next = current.next.next
  }
}

function dDisplay() {
  let current = this.head
  while (current.next !== null && current.next.element !== "head") {
    console.log(current.element)
    current = current.next
  }
}