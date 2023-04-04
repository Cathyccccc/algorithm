// 判断一个二叉树是否是平衡二叉树

function isBalanceTree(root) {
  if (root == null) return true;
  var left = getTreeDeep(root.left);
  var right = getTreeDeep(root.right);
  if (Math.abs(left - right) > 1) {
    return false;
  } else {
    return isBalanceTree(root.left) && isBalanceTree(root.right);
  }
}

// 获取以当前节点为根节点的树的深度
function getTreeDeep(root) {
  if (root == null) return 0;
  var leftDeep = getTreeDeep(root.left);
  var rightDeep = getTreeDeep(root.right);
  return Math.max(leftDeep, rightDeep) + 1; // 每一层都加1，从0开始加
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var a = new Node('a'); //              a
var b = new Node('b'); //             / \
var c = new Node('c'); //           b    c
var d = new Node('d'); //         / \   / \
var e = new Node('e'); //        d  e  f   g
var f = new Node('f'); //            \
var g = new Node('g'); //             h
var h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.right = h;

// console.log(getTreeDeep(a));

console.log(isBalanceTree(a));
