// 二叉树的双旋 (变化分支是唯一的最深分支)

function change(root) {
  if (isBalanceTree(root)) return root;
  if (root.left != null) root.left = change(root.left);
  if (root.right != null) root.right = change(root.right);
  var leftDeep = getTreeDeep(root.left);
  var rightDeep = getTreeDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) < 2) {
    return true;
  } else if (leftDeep > rightDeep) { // 左深右浅，右旋
    var noChangeBr = getTreeDeep(root.left.left);
    var changeBr = getTreeDeep(root.left.right); // 变化分支
    if (changeBr > noChangeBr) {
      root.left = leftRotate(root.left);
    }
    return rightRotate(root);
  } else { // 右深左浅，左旋
    var changeBr = getTreeDeep(root.right.left); // 变化分支
    var noChangeBr = getTreeDeep(root.right.right);
    if (changeBr > noChangeBr) {
      root.right = rightRotate(root.right);
    }
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
  var leftDeep = getTreeDeep(root.left);
  var rightDeep = getTreeDeep(root.right);
  return Math.max(leftDeep, rightDeep) + 1;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var a = new Node('5');
var b = new Node('2');
var c = new Node('1');
var d = new Node('3');
var e = new Node('4');

a.left = b;
b.left = c;
b.right = d;
d.right = e;

var result = isBalanceTree(a);
console.log(result);

var newRoot = change(a);
var res = isBalanceTree(newRoot);
console.log(res);
console.log(newRoot)