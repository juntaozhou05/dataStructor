// 动态规划

//1.间隔数加起来最大
// 递归
var ret = function (arr, i) {
  if (i == 0) {
    return arr[0];
  } else if (i == 1) {
    return Math.max(arr[0], arr[1]);
  } else {
    let A = ret(arr, i - 2) + arr[i];
    let B = ret(arr, i - 1);
    return Math.max(A, B);
  }
};
// 非递归
var ret = function (arr, i) {
  let opt = [0, 0, 0, 0, 0, 0, 0];
  opt[0] = arr[0];
  opt[1] = Math.max(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    let a = opt[i - 2] + arr[i];
    let b = opt[i - 1];
    opt[i] = Math.max(a, b);
  }
  return opt[arr.length - 1];
};

console.log(ret([1, 2, 4, 1, 7, 8, 3], 6)); // 15

// 2.合为目标数
var ret = function (arr, i, s) {
  if (s == 0) {
    return true;
  } else if (i == 0) {
    return arr[i] == s;
  } else if (arr[i] > s) {
    return ret(arr, i - 1, s);
  } else {
    let a = ret(arr, i - 1, s - arr[i]);
    let b = ret(arr, i - 1, s);
    return a || b;
  }
};

console.log(ret([3, 34, 4, 12, 5, 2], 5, 9));
console.log(ret([3, 34, 4, 12, 5, 2], 5, 10));
console.log(ret([3, 34, 4, 12, 5, 2], 5, 11));
console.log(ret([3, 34, 4, 12, 5, 2], 5, 12));
console.log(ret([3, 34, 4, 12, 5, 2], 5, 13));

// 3.剑指 Offer 42. 连续子数组的最大和
// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
// 要求时间复杂度为O(n)。

// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

function LSS(list) {
  const len = list.length;
  let max = list[0];
  for (let i = 1; i < len; i++) {
    list[i] = Math.max(0, list[i - 1]) + list[i];
    if (list[i] > max) max = list[i];
  }

  return max;
}
console.log(LSS([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

// 70. 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。
// 示例 1：
// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶

const climbStairs = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};

console.log(climbStairs(3)); // 6

// 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。
// 示例 1：

// 输入： [1,2,3,1]
// 输出： 4
// 解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。
// 示例 2：

// 输入： [2,7,9,3,1]
// 输出： 12
// 解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。

var massage = function (nums) {
  let n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  let dp = new Array(n + 1).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[n - 1];
};

console.log(massage([1, 2, 3, 1])); // 4
console.log(massage([2, 7, 9, 3, 1])); // 12
