// 图的广度优先搜索（见 图.png）

function mapBfs(roots, target, paths) {
  if (roots == null || roots.length == 0) return false;
  var nextRoots = [];
  for (let i = 0; i < roots.length; i++) {
    if (paths.indexOf(roots[i]) > -1) continue;
    paths.push(roots[i])
    if (roots[i].value == target) return true;
    else {
      nextRoots = nextRoots.concat(roots[i].neighbor);
    }
  }
  return mapBfs(nextRoots, target, paths);
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

console.log(mapBfs([b], 'f', []));

console.log(mapBfs([a], 'n', []))