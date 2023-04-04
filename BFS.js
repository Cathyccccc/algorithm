// 树的广度优先搜索（多叉）

function bfs(roots, target) {
  if (roots == null || roots.length == 0) return false;
  var nextRoots = [];
  for (let i = 0; i < roots.length; i++) {
    if (roots[i].value == target) return true;
    else nextRoots = nextRoots.concat(roots[i].childs);
  }
  return bfs(nextRoots, target);
}

function Node(value) {
  this.value = value;
  this.childs = [];
}

var a = new Node('a'); //       a
var b = new Node('b'); //     / | \
var c = new Node('c'); //    b  c  d
var d = new Node('d'); //         / \
var e = new Node('e'); //        e   f
var f = new Node('f');

a.childs.push(b, c, d);
d.childs.push(e, f);

console.log(bfs([a], 'd'));
console.log(bfs([a], 'n'));


