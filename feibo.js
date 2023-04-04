// 斐波那契数列
// 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
// 求第 n项的值为多少

function feibo(n) {
  if (n <= 0) return -1;
  if (n == 1) return 1;
  if (n == 2) return 1;
  return feibo(n - 1) + feibo(n - 2);
}

console.log(feibo(3))
console.log(feibo(5))
console.log(feibo(9))