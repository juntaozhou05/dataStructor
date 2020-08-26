// 双指针类型
// 常用的有，对撞指针（一个在头，一个在尾），有的是快慢指针等等
// 使用场景：
// 1.多数求和这样的题目
// 几个数字的和为一个特定的值，这种题目一般用两个指针，一个在头，一个在尾，两边向中间遍历，找到合适的数字

// 2.数字交换
// 数组中元素的交换一般都用双指针，不然需要移动大量元素，用双指针找到要交换的数字来交换

// 1.两数之和（中）
var twoSum = function (nums, target) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i];
    let ind = nums.indexOf(result);
    if (
      ind > -1 &&
      i !== ind &&
      arr.indexOf(i) === -1 &&
      arr.indexOf(ind) === -1
    ) {
      arr.push(i);
      arr.push(ind);
    }
  }
  return arr;
};
console.log(twoSum([3, 2, 4], 6));

// 2.盛最多水的容器（中）
var maxArea = function (height) {
  let res = 0;
  let n = height.length;
  let l = 0;
  let r = n - 1;
  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, area);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// 3.合并2个数组
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1;
  let inx = nums1.length - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[inx--] = nums1[i--];
    } else {
      nums1[inx--] = nums2[j--];
    }
  }
  while (j >= 0) {
    nums1[inx--] = nums2[j--];
  }
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]

// 4.验证回文串
var isPalindrome = function (str) {
  str = str.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  let l = 0,
    r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

// 5.区间列表的交集（中）
const intervalIntersection = (A, B) => {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < A.length && j < B.length) {
    const start = Math.max(A[i][0], B[j][0]);
    const end = Math.min(A[i][1], B[j][1]);
    if (start <= end) {
      res.push([start, end]);
    }
    if (A[i][1] < B[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return res;
};

// 6.两个数组的交集（简单）
const intersect = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b); // 先排序，使得重复的元素相邻出现
  const res = [];
  let p1 = 0; // 两个指针
  let p2 = 0;
  while (p1 < nums1.length && p2 < nums2.length) {
    // 用&& 因为有一个越界了就不能找交集
    if (nums1[p1] > nums2[p2]) {
      // p1指向的数大，移动p2，期待遇到一样大的
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      // 类似
      p1++;
    } else {
      // 遇到相同的，推入res数组，两个指针同时移动考察下一个
      res.push(nums1[p1]);
      p1++;
      p2++;
    }
  }
  return res;
};
console.log(intersect([1, 2, 2, 1], [2, 2]));

// 7.
