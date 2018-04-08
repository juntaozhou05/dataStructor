//栈

function stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[this.top--];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  return (this.top = 0);
}

//进制转换
function mulBase(num, base) {
  var s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor((num /= base));
  } while (num > 0);
  var converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}

//逆波兰算法
function polan(str) {
  let result = 0;
  let tempNum = -1;
  let tempArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/\d/)) {
      tempNum++;
      tempArray[tempNum] = str[i];
    } else {
      switch (str[i]) {
        case "+":
          result = tempArray[tempNum--] * 1 + tempArray[tempNum];
          tempNum--;
          tempArray[tempNum] = result;
          break;
        case "-":
          result = tempArray[tempNum--] * 1 - tempArray[tempNum];
          tempNum--;
          tempArray[tempNum] = result;
          break;
        case "*":
          result = tempArray[tempNum--] * 1 * tempArray[tempNum];
          tempNum--;
          tempArray[tempNum] = result;
          break;
        case "/":
          result = tempArray[tempNum--] * 1 / tempArray[tempNum];
          tempNum--;
          tempArray[tempNum] = result;
          break;
      }
    }
  }
  result = tempArray[tempNum];
  return result;
}
