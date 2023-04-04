// 二叉树的单旋（自下而上）
// 1.判断二叉树是否是平衡二叉树
// 2.是平衡二叉树，返回；不是平衡二叉树，进行单旋
// 3.找出旋转节点（不平衡的节点）；找出变化分支；

function change(root) { // 返回平衡后的二叉树
  // ...单旋操作
  if (isBalanceTree(root)) return root; // 判断以当前节点为根节点的树是否是平衡的
  if (root.left != null) root.left = change(root.left); // 一直往下查找
  if (root.right != null) root.right = change(root.right); // 一直往下查找
  var leftDeep = getTreeDeep(root.left);
  var rightDeep = getTreeDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) < 2) {
    return true;
  } else if (leftDeep > rightDeep) {
    // 左深右浅，右旋
    // 当前旋转节点为root，新根为root.left，变化分支为root.left.right
    return rightRotate(root);
  } else {
    // 右深左浅，左旋
    // 当前旋转节点为root，新根为root.right，变化分支为root.right.left
    return leftRotate(root);
  }
}

function leftRotate(root) {
  var newRoot = root.right;
  var changeBranch = root.right.left;
  root.right = changeBranch;
  newRoot.left = root;
  return newRoot;
}

function rightRotate(root) {
  var newRoot = root.left;
  var changeBranch = root.left.right;
  root.left = changeBranch;
  newRoot.right = root;
  return newRoot;
}

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

function getTreeDeep(root) {
  if (root == null) return 0;
  var leftD = getTreeDeep(root.left);
  var rightD = getTreeDeep(root.right);
  return Math.max(leftD, rightD) + 1; // 每往上数一层加1，最开始为0（root === null)
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
// var e = new Node('e');

a.right = b;
b.left = c;
b.right = d;
// a.left = e;

var result = isBalanceTree(a);
console.log(result);

var newRoot = change(a);
var res = isBalanceTree(newRoot);
console.log(res)
console.log(newRoot)

