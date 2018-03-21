/**
 * @Date:   2018-03-20T17:40:14+08:00
 * @Last modified time: 2018-03-20T17:40:14+08:00
 */
//导演类，控制游戏的逻辑
export class Director {
    constructor() {
        log('构造器初始化');
    }
    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }
}

//# sourceMappingURL=Director-compiled.js.map