// 冒泡排序
// 每次比较挨着的两个项，将大的放后面，最后最大值会被放在最后（一个一个往后冒）
var arr = [4, 1, 6, 9, 3, 2, 8, 7];

// 交换数组中的某两项
function exchange(arr, a, b) {
  var temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

// 比较前后两个值的大小
function compare(a, b) {
  if (a > b) return true
  else return false
}

// 对数组进行排序
function sortArr(arr) {
  if (arr == null || arr.length == 0) return;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) { // j + 1 不能超过最后一位，所以这里要 - 1
      if (compare(arr[j], arr[j + 1])) {
        exchange(arr, j, j + 1);
      }
    }
  }
  
  return arr
}

const newArr = sortArr(arr)
console.log(newArr)

