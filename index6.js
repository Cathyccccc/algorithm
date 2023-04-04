// 简单快速排序
// 每次以第一项为标准，其他项中小于该项的放在该项左边，大于该项的放在该项右边（数组）
// 然后再对该项左右两侧的项组成的数组继续进行上一步骤

function quickSort(arr) {
  if (arr == null || arr.length == 0) return [];
  var leader = arr[0];
  var left = [];
  var right = [];
  for (let i = 1; i < arr.length; i++) { // 这里必须从下标为1项开始，需要排除leader自身，然后分出左侧和右侧项
    if (arr[i] < leader) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  left.push(leader);
  return left.concat(right);
}

var arr = [4, 1, 6, 9, 3, 2, 8, 7];
var newArr = quickSort(arr);
console.log(newArr);