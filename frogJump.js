// 动态规划之青蛙跳台阶问题（实质上还是斐波那契数列的原理）
// 一只青蛙每次跳一个或两个台阶，那么跳上第 n 个台阶有多少中方案？？？
// 思考：跳上第 n个台阶时，一定是从第 n - 1 或 n - 2 个台阶跳上去的，由此递推

function jump(n) {
  if (n <= 0) return -1;
  if (n == 1) return 1;
  if (n == 2) return 2; // 从第 0 阶跳上去或者先跳上 1阶再跳到 2阶
  return jump(n - 1) + jump(n - 2);
}

console.log(jump(4)); // 5
// 跳到 4阶的5中方案：
// 1, 1, 1, 1
// 1, 1, 2
// 1, 2, 1
// 2, 1, 1
// 2, 2

// 动态规划之变态青蛙跳台阶问题
// 一只青蛙每次可以跳一个或两个或三个或...或 n个台阶，那么跳上第 n个台阶有多少种方案？？？ 
// 思考：跳上第 n个台阶时，一定是从第 n - 1 或 n - 1 或 。。。 或 第 0个台阶跳上去的
// f(n) = f(n-1) + f(n-2) + ... + f(1) + f(0) 这里f(0)值为1

function bJump(n) {
  if (n <= 0) return -1;
  if (n == 1) return 1;
  if (n == 2) return 2;
  var result = 1; // 直接从0阶跳到n阶
  for (let i = 1; i < n; i++) { // 这里i从0开始时，n - i的就值为n，就会无限递归
    result += bJump(n - i);
    // f(n) = f(n - 1) + f(n -2) + ... + f(1)
  }
  return result;
}

console.log(bJump(4));
// 1,1,1,1
// 1,1,2
// 1,2,1
// 2,1,1
// 2,2
// 1,3
// 3,1
// 4