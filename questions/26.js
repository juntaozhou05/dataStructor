// 删除排序数组中的重复项

var removeDuplicates = function (nums) {
  if (nums === "") return false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
console.log(removeDuplicates([1, 1, 2, 3, 4]));
