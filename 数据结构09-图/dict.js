// 创建字典的构造函数
function Dictionay() {
    // 字典属性
    this.items = {}

    // 字典操作方法
    // 在字典中添加键值对
    Dictionay.prototype.set = function (key, value) {
        this.items[key] = value
    }

    // 判断字典中是否有某个key
    Dictionay.prototype.has = function (key) {
        return this.items.hasOwnProperty(key)
    }

    // 从字典中移除元素
    Dictionay.prototype.remove = function (key) {
        // 1.判断字典中是否有这个key
        if (!this.has(key)) return false

        // 2.从字典中删除key
        delete this.items[key]
        return true
    }

    // 根据key去获取value
    Dictionay.prototype.get = function (key) {
        return this.has(key) ? this.items[key] : undefined
    }

    // 获取所有的keys
    Dictionay.prototype.keys = function () {
        return Object.keys(this.items)
    }

    // 获取所有的value
    Dictionay.prototype.values = function () {
        return Object.values(this.items)
    }

    // size方法
    Dictionay.prototype.size = function () {
        return this.keys().length
    }

    // clear方法
    Dictionay.prototype.clear = function () {
        this.items = {}
    }
}