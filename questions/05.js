// 滑动窗口
// 1.最长回文子串
var longestPalindrome = function (s) {
  if (s === "") return "";
  if (s.length == 1) return s;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let a = pare(i, i);
    let b = pare(i, i + 1);
    let temp = a.length > b.length ? a : b;
    result = result.length > temp.length ? result : temp;
  }
  return result;
  function pare(left, right) {
    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        left--;
        right++;
      } else break;
    }
    left++;
    if (right >= s.length) {
      return s.slice(left);
    }
    return s.slice(left, right);
  }
};
console.log("longestPalindrome('aabacc')", longestPalindrome("aabacc")); // aba
console.log("longestPalindrome('aabaa')", longestPalindrome("aabaa")); // aabaa
console.log("longestPalindrome('cbbd')", longestPalindrome("cbbd")); //bb
