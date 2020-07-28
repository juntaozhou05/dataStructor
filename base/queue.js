//队列
function Queue() {
    this.dataStore = []
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty
}

function enqueue(element) {
    this.dataStore.push(element)
}

function dequeue() {
    this.dataStore.shift()
}

function front() {
    return this.dataStore[0]
}

function back() {
    return this.dataStore[this.dataStore.length - 1]
}

function toString() {
    let str = ""
    for (let i = 0; i < this.dataStore.length; i++) {
        str += this.dataStore[i] + "\n"
    }
    return str
}

function empty() {
    if (this.dataStore.length === 0) {
        return true
    } else {
        return false
    }
}

//斐波那契数列
function fib(num) {
    let arr = []
    arr[0] = 0
    arr[1] = 1
    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
        console.log(arr[i])
    }
}
//斐波那契 递归法
function fib(num) {
    if (num < 2) {
        return num === 0 ? 0 : 1
    } else {
        return fib(num - 1) + fib(num - 2)
    }
}

