/**
 * @Date:   2018-03-20T17:33:51+08:00
 * @Last modified time: 2018-03-20T17:33:51+08:00
 */
//背景类
//继承精灵类
import { Sprite } from "../base/Sprite.js";
export class BackGround extends Sprite {
    constructor(ctx, image) {
        //const image = Sprite.getImage('background');
        super(ctx, image, 0, 0, image.width, image.height, 0, 0, window.innerWidth, window.innerHeight);
        //DataStore.getInstance().canvas.width, DataStore.getInstance().canvas.height);
    }
}

//# sourceMappingURL=BackGround-compiled.js.map