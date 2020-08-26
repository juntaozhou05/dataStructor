// 二分查找
// 核心代码:
// 搜索右边界
function searchR(left, right, target) {
  while (left <= right) {
    mid = (left + right) >> 1;
    if (nums[mid] <= target) left = mid + 1;
    else right = mid - 1;
  }
  return right;
}

// 1.搜索插入位置
const searchInsert = (nums, target) => {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return lo; // 退出循环时 hi比lo小1
};
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));

// 2.寻找峰值
var findPeakElement = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    let mid = Math.floor((l + r) >> 1);
    //因为题目中明确过没有相等的值，所以直接大于即可
    if (nums[mid] > nums[mid + 1]) r = mid;
    else l = mid + 1;
  }
  return l;
};
console.log(findPeakElement([1, 2, 3, 1]));

// 3.排列硬币
// 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。
// 给定一个数字 n，找出可形成完整阶梯行的总行数。
// n 是一个非负整数，并且在32位有符号整型的范围内。

// 示例 1:
// n = 5
// 硬币可排列成以下几行:
// ¤
// ¤ ¤
// ¤ ¤
// 因为第三行不完整，所以返回2.

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n == 0) {
    return 0;
  }
  var left = 0;
  // 只有 n 个硬币的情况下，最大肯定不会超过 n 行，所以这里把搜索的右侧界限定为 n
  var right = n;
  while (left <= right) {
    var mid = left + ((right - left) >> 1);
    // 形成 mid 行的阶梯一共需要 costToFinishMid 个硬币，这里是数学公式
    var costToFinishMid = ((1 + mid) * mid) / 2;
    if (costToFinishMid == n) {
      return mid;
    } else if (costToFinishMid < n) {
      left = mid + 1;
    } else if (costToFinishMid > n) {
      right = mid - 1;
    }
  }
  // 按照上述这种写法，right 在这里指向距离 target 最近的左侧元素的位置
  return right;
};
