// 二叉树的双旋 （变化分支不是唯一最深分支且变化分支和旋转节点另一分支的高度差大于等于2）

function changeTree(root) {
  if (isBalanceTree(root)) return root;
  if (root.left != null) root.left = changeTree(root.left);
  if (root.right != null) root.right = changeTree(root.right);
  var leftDeep = getTreeDeep(root.left);
  var rightDeep = getTreeDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) < 2) {
    return true;
  } else if (leftDeep > rightDeep) {
    var noChangeBr = getTreeDeep(root.left.left);
    var changeBr = getTreeDeep(root.left.right);
    if (changeBr > noChangeBr) {
      root.left = leftRotate(root.left);
    }
    var newRoot = rightRotate(root);
    newRoot.right = changeTree(newRoot.right);
    newRoot = changeTree(newRoot);
    return newRoot;
  } else {
    var changeBr = getTreeDeep(root.right.left);
    var noChangeBr = getTreeDeep(root.right.right);
    if (changeBr > noChangeBr) {
      root.right = rightRotate(root.right);
    }
    var newRoot = leftRotate(root);
    newRoot.left = changeTree(newRoot.left);
    newRoot = changeTree(newRoot);
    return newRoot;
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
  var leftDeep = getTreeDeep(root.left);
  var rightDeep = getTreeDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) > 1) {
    return false;
  } else {
    return isBalanceTree(root.left) && isBalanceTree(root.right);
  }
}

function getTreeDeep(root) {
  if (root == null) return 0;
  var left = getTreeDeep(root.left);
  var right = getTreeDeep(root.right);
  return Math.max(left, right) + 1;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var a = new Node('1');
var b = new Node('2');
var c = new Node('3');
var d = new Node('4');
var e = new Node('5');
var f = new Node('6');

a.right = d;
d.left = c;
c.left = b;
d.right = e;
e.right = f;

var result = isBalanceTree(a);
console.log(result);

var newRoot = changeTree(a);
var res = isBalanceTree(newRoot);
console.log(res);
console.log(newRoot);