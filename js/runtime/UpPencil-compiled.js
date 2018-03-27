/**
 * @Date:   2018-03-20T17:33:51+08:00
 * @Last modified time: 2018-03-20T17:33:51+08:00
 */
//上半部分铅笔
import { Pencil } from "./Pencil.js";
import { Sprite } from "../base/Sprite.js";
export class UpPencil extends Pencil {
    constructor(top) {
        const image = Sprite.getImage('pencilUp');
        super(image, top);
    }

    draw() {
        this.y = this.top - this.height;
        super.draw();
    }

}

//# sourceMappingURL=UpPencil-compiled.js.map