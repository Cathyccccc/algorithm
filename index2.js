// 线性数据结构的递归遍历
function bian(root) {
  if (root == null) return;
  console.log(root.value);
  bian(root.next);
}

function Node(value) {
  this.value = value;
  this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

bian(node1); // 依次输出 1, 2, 3, 4, 5

function bianArr(arr, i) {
  if (arr == null || i >= arr.length) return;
  console.log(arr[i]);
  bianArr(arr, i + 1); // 这里不能写成i++，这样实际传递的还是i，而不是i+1
}

var arr = ['a', 'b', 'c', 'd'];
bianArr(arr, 0);