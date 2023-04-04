// 克鲁斯卡尔算法
// 依次找出所有边中最短的边进行连接，组成连接集合，当前最短边的两个点都在同一个集合中时不会连接。直至最后所有点都连接到一个集合中。
// 传入参数：所有需要连接的点的集合，所有点之间的距离的集合
var m = Infinity;
var points = [];
var distance = [
  [0, 8, 4, 3, m, m],
  [8, 0, m, 3, 6, m],
  [4, m, 0, 4, m, 5],
  [3, 3, 4, 0, m, 7],
  [m, 6, m, m, 0, m],
  [m, m, 5, 7, m, 0]
];

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');
var f = new Node('F');
points.push(a, b, c, d, e, f);

function kruskal(points, distance) {
  
  var linkGroup = []; // 二维数组，包含当前已经连接的集合
  while(true) {
    var minDistance = Infinity;
    var begin = null;
    var end = null;
    for (let i = 0; i < distance.length; i++) {
      for (let j = 0; j < distance[i].length; j++) { // 找符合要求的最短边
        var tempBegin = points[i];
        var tempEnd = points[j];
        // 选出可进行连接的两个点
        if (i !== j && distance[i][j] < minDistance && canLink(linkGroup, tempBegin, tempEnd)) {
          // 连接的点排除自身；当前两个点的距离最小（同时会排除不存在的连接）；当前选中的两个点可进行连接（连接的两个点不在一个集合中）
          minDistance = distance[i][j];
          begin = tempBegin;
          end = tempEnd;
        }
      }
    }
    link(linkGroup, begin, end);
    if (linkGroup.length === 1 && linkGroup[0].length == points.length) {
      break;
    }
  }
  return linkGroup[0];
}

// 需要判断所有集合中是否含begin和end，如果存在且begin和end在同一个集合中，返回false，其他情况返回true
function canLink(linkGroup, begin, end) {
  var beginGroup = null;
  var endGroup = null;
  for (let i = 0; i < linkGroup.length; i++) {
    if (linkGroup[i].indexOf(begin) != -1) { // 当前连接集合中存在begin点
      beginGroup = linkGroup[i];
    }
    if (linkGroup[i].indexOf(end) != -1) { // 当前连接集合中存在end点
      endGroup = linkGroup[i];
    }
  }
  if (beginGroup != null && endGroup != null && beginGroup == endGroup) { // 两个点在同一个集合中
    return false
  }
  return true
}

function link(linkGroup, begin, end) {
  var beginGroup = null;
  var endGroup = null;
  for (let i = 0; i < linkGroup.length; i++) {
    if (linkGroup[i].indexOf(begin) != -1) { // 当前连接集合中存在begin点
      beginGroup = linkGroup[i];
    }
    if (linkGroup[i].indexOf(end) != -1) { // 当前连接集合中存在end点
      endGroup = linkGroup[i];
    }
  }
  if (beginGroup == null && endGroup == null) { // 两个点都不在任意集合中， 将两个点连接产生新部落
    linkGroup.push([begin, end])
  }
  if (beginGroup == null && endGroup !== null) { // end在集合中，begin不在，end所在集合中添加begin点
    endGroup.push(begin);
  }
  if (beginGroup != null && endGroup == null) { // begin在集合中，end不在，begin所在集合中添加end点
    beginGroup.push(end);
  }
  if (beginGroup != null && endGroup != null && beginGroup != endGroup) { // begin和end分别在不同的集合中，将两个集合合并
    var index = linkGroup.indexOf(beginGroup);
    linkGroup.slice(index, 1);
    index = linkGroup.indexOf(endGroup);
    linkGroup.slice(index, 1);
    var link = beginGroup.concat(endGroup);
    linkGroup.push(link);
  }
  begin.neighbor.push(end);
  end.neighbor.push(begin);
}

function Node(value) {
  this.value = value;
  this.neighbor = [];
}

var result = kruskal(points, distance);
// console.log(result)
result.forEach(node => {
  console.log(node.value, node.neighbor)
})