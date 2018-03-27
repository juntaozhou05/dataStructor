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

//声明一个链表类
function Node(element) {
  this.element = element;
  this.next = null;
}

//链表的操作
function LList() {
  this.head = new node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}

//查找元素
function find(val) {
  let currentNode = this.head;
  while (currentNode.element != val) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

//插入元素
function insert(target, val) {
  let newNode = new Node(target);
  let currentNode = this.find(newNode);
  newNode.next = currentNode.next;
  currentNode.next = newNode;
}

//打印链表
function display() {
  let currentNode = this.head;
  while (currentNode.next !== null) {
    console.log(currentNode.next.element);
    currentNode = currentNode.next;
  }
}
