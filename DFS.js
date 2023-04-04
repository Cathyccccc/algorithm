// 树的深度优先搜索（多叉）

function dfs(root, target) {
  if (root == null) return false;
  if (root.value == target) return true;
  var result = false;
  for (var i = 0; i < root.childs.length; i++) {
    result |= dfs(root.childs[i], target); // |= 有1为1，全0为0（这里可以理解为result = false, 当调用dfs函数的结果返回中有一个为true时，result的值为1，否则值为0）
  }
  // console.log(result)
  return result ? true : false;
}

function Node(value) {
  this.value = value;
  this.childs = [];
}

var a = new Node('a');    //       a
var b = new Node('b');    //     / | \
var c = new Node('c');    //    b  c  d
var d = new Node('d');    //         / \ 
var e = new Node('e');    //        e   f
var f = new Node('f');

a.childs.push(b, c, d);
d.childs.push(e, f);

console.log(dfs(a, 'd'))
console.log(dfs(a, 'n'))

