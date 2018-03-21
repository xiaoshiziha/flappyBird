/**
 * @Date:   2018-03-20T16:57:14+08:00
 * @Last modified time: 2018-03-20T17:01:54+08:00
 */
 //变量缓存器，方便我们在不同的变量中访问和修改变量
export class DataStore {
    //访问变量
    static getInstance() {
        if (!DataStore.instance) {
            DataStore.instance = new DataStore()
        }
        return DataStore.instance
    }
    constructor() {
        this.map = new Map()
    }
    put(key, value) {
        if(typeof value ==  'function') {
            value = new value
        }
        this.map.set(key, value)
        return this
    }
    get(key) {
        return this.map.get(key);
    }
    destory() {
        for(let value of this.map.value) {
            value = null
        }
    }
}
