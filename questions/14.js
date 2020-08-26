// 14.最大公共前缀

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  //1.以元素长度对数组排序
  strs.sort((a, b) => a.length - b.length);
  const len = strs.length;
  //2.默认最常前缀为第一个数组元素
  let viewLength = strs[0].length;
  //3.循环缩减最常公共前缀长度 viewLength
  for (let i = 1; i < len; i++) {
    //3.1.判断 公共前缀 和 元素前 viewLength 个的前缀 是否相等
    let flag = false;
    //3.2.循环缩减前缀 viewLength 的长度
    while (viewLength !== 0 && flag === false) {
      //获取当前得到的公共前缀 viewItem
      let viewItem = strs[0].substring(0, viewLength);
      //获取当前数组元素的前缀 item（在 viewLength 下）
      const item = strs[i].substring(0, viewLength);
      //如果两个前缀不等，说明当前前缀 viewItem 的长度 viewLength 需要缩减
      if (item !== viewItem) {
        //缩减前缀长度
        viewLength--;
      } else {
        //两个前缀相等，说明当前前缀长度 viewLength 符合条件，跳出 while 循环
        flag = true;
      }
    }
  }
  //返回处理后的最常公共前缀
  return strs[0].substring(0, viewLength);
};
