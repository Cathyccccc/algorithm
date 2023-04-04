// 图的深度优先搜索（见 图.png）
// 图的连接是重复的，它们可能有相同的邻居节点，因此要排除掉已经搜索过的节点

function mapDfs(node, target, paths) {
  if(node == null) return false;
  if (paths.indexOf(node) > -1) return false;
  if(node.value == target) return true;
  paths.push(node); // 走到这里说明：node有值且不为target，放入已搜索数组
  var result = false;
  for (let i = 0; i < node.neighbor.length; i++) {
     // 前面已经搜索过了且值不为target，跳过当前这一循环，进行下一个循环
    result |= mapDfs(node.neighbor[i], target, paths);
  }
  return result ? true : false;
}

function Node(value) {
  this.value = value;
  this.neighbor = [];
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');

a.neighbor.push(b, c);
b.neighbor.push(a, c);
c.neighbor.push(a, b, d, e);
d.neighbor.push(c);
e.neighbor.push(c, f);
f.neighbor.push(e);

console.log(mapDfs(b, 'f', []));
console.log(mapDfs(a, 'n', []))
