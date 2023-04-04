// 实现普利姆算法

var m = Infinity;
var lineDistance = [
  [0, 8, 4, 3, m, m],
  [8, 0, m, 3, 6, m],
  [4, m, 0, 4, m, 5],
  [3, 3, 4, 0, m, 7],
  [m, 6, m, m, 0, m],
  [m, m, 5, 7, m, 0]
]
var points = [];
var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');
var f = new Node('F');
points.push(a, b, c, d, e, f);

// 传入参数：所有点的集合，所有的线的集合，指定的起点
function prim(points, lineDistance, startNode) {
  if (points == null || points.length == 0 || lineDistance == null || lineDistance.length == 0) return;
  var nowPoints = []; // 当前连接的所有点，点对象中包含neighbor属性，表示最小连接值时连接的邻居
  nowPoints.push(startNode);
  while(true) {
    var minDisNode = getMinDisNode(points, lineDistance, nowPoints)
    console.log(minDisNode)
    nowPoints.push(minDisNode)
    if (nowPoints.length == points.length) {
      break;
    }
  }
  return nowPoints;
}
// 找出当前已连接的点连接的线，在这些线中分别找出对应的最短的那一条（线的另一端的点未连接）
function getMinDisNode(points, lineDistance, nowPoints) {
  var minDistance = Infinity;
  var fromNode = null;
  var toNode = null;
  for (let i = 0; i < nowPoints.length; i++) {
    var lines = lineDistance[points.indexOf(nowPoints[i])];
    for (let j = 0; j < lines.length; j++) {
      if (nowPoints.indexOf(points[j]) == -1 && lines[j] < minDistance) { // 不包含就已经把自身给排除掉了（lines[j]值为0）
        minDistance = lines[j]
        fromNode = points[i]
        toNode = points[j]
      }
    }
  }
  if (fromNode !== null && toNode !== null) {
    fromNode.neighbor.push(toNode)
    toNode.neighbor.push(fromNode)
  }
  return toNode
}

function Node(value) {
  this.value = value;
  this.neighbor = [];
}

prim(points, lineDistance, a)