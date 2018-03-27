/**
 * @Date:   2018-03-20T17:41:08+08:00
 * @Last modified time: 2018-03-20T20:08:53+08:00
 */
//初始化整个游戏的精灵，作为游戏开始的入口
import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { BackGround } from "./js/runtime/BackGround.js";
import { Land } from "./js/runtime/Land.js";
import { DataStore } from "./js/base/DataStore.js";
import { Director } from "./js/Director.js";
export class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        //context相当于一个画笔，联系画布和逻辑
        //画布上绘图的环境
        this.ctx = this.canvas.getContext('2d');
        log(this.ctx);
        this.dataStore = DataStore.getInstance();
        //this.director = Director.getInstance()
        log(this.dataStore);
        const loader = ResourceLoader.create();
        //这条有问题

        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }

    onResourceFirstLoaded(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        //console.log(map);
        this.init();
        //log('123123')
    }
    init() {
        this.dataStore.put('background', BackGround).put('land', Land).put('pencils', []);
        //创建铅笔要在游戏逻辑运行之前
        Director.getInstance().run();
    }
}

//# sourceMappingURL=Main-compiled.js.map