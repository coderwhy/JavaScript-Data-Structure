// 自定义队列
function Queue() {
    var items = []

    // 队列操作的方法
    // enter queue方法
    this.enqueue = function (element) {
        items.push(element)
    }

    // delete queue方法
    this.dequeue = function () {
        return items.shift()
    }

    // 查看前端的元素
    this.front = function () {
        return items[0]
    }

    // 查看队列是否为空
    this.isEmpty = function () {
        return items.length == 0
    }

    // 查看队列中元素的个数
    this.size = function () {
        return items.length
    }
}