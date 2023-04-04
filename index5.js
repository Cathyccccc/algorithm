// 选择排序
// 每一圈循环，选出一个最大值，放在后面

// 交换数组中的某两项
function exchange(arr, a, b) {
  var temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

// 比较两个值的大小
function compare(a, b) {
  return a < b;
}

// 对数组进行排序
function sortArr(arr) {
  if (arr == null || arr.length == 0) return;
  for (let i = 0; i < arr.length; i++) {
    var maxIndex = 0;
    for (let j = 0; j < arr.length - i; j++) {
      if (compare(arr[maxIndex], arr[j])) {
        maxIndex = j;
      }
    }
    exchange(arr, maxIndex, arr.length - 1 - i) // 这里 - 1 是因为最大下标比length小1
  }
  return arr;
}

var arr = [4, 1, 6, 9, 3, 2, 8, 7];

var newArr = sortArr(arr)
console.log(newArr)