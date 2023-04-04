// 实现二叉搜索树（左子树的节点都比当前节点小，右子树的节点都比当前节点大）

function buildSearchTree(arr) {
  if (arr == null || arr.length == 0) return;
  var root = new Node(arr[0]);
  for (let i = 1; i < arr.length - 1; i++) {
    addNode(root, arr[i])
  }
  return root;
}

function addNode(root, num) {
  if (root == null) return;
  if (root.value == num) return; // 当前值已存在于树中。不需要再添加重复的值
  if (num < root.value) {
    if (root.left == null) {
      root.left = new Node(num);
    } else {
      addNode(root.left, num);
    }
  } else {
    if (root.right == null) {
      root.right = new Node(num);
    } else {
      addNode(root.right, num);
    }
  }
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var arr = [];
for(let i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 1000))
}

var result = buildSearchTree(arr);
console.log(result)

// 遍历二叉树
function bianLink(root) {
  if (root == null) return;
  bianLink(root.left);
  console.log(root.value);
  bianLink(root.right);
}
// bianLink(result)

// 使用构建好的二叉树进行搜索，看是否有某个值
var times = 0;
function searchTree(root, target) {
  if (root == null) return false;
  times += 1; // 计算搜索次数
  if (root.value == target) return true;
  if (target < root.value) return searchTree(root.left, target); // 这里必须写return，需要把下层传递过来的true或false传递出去
  else return searchTree(root.right, target);
}

var bool = searchTree(result, 234);
console.log(bool, times);