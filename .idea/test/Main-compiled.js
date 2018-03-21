/**
 * @Date:   2018-03-20T17:41:08+08:00
 * @Last modified time: 2018-03-20T20:08:53+08:00
 */
//初始化整个游戏的精灵，作为游戏开始的入口
import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { BackGround } from "./js/runtime/BackGround.js";
export class Main {
    constructor() {
        this.canvas = document.getElementById('game_canvas');
        //context相当于一个画笔，联系画布和逻辑
        this.ctx = this.canvas.getContext('2d');
        const loader = ResourceLoader.create();
        //这条有问题

        loader.onLoaded(map => this.onResourceFirstLoaded(map));
    }

    onResourceFirstLoaded(map) {
        let background = new BackGround(this.ctx, map.get('background'));
        console.log(map);
        background.draw();
        //log('123123')
    }
}

//# sourceMappingURL=Main-compiled.js.map