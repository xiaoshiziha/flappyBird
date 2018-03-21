/**
 * @Date:   2018-03-20T16:58:39+08:00
 * @Last modified time: 2018-03-20T17:03:32+08:00
 */
//精灵的基类，负责初始化精灵加载的资源，大小和位置
export class Sprite {
    constructor(ctx = null, img = null, srcX = 0, srcY = 0, srcW = 0, srcH = 0, x = 0, y = 0, width = 0, height = 0) {
        //this.dataStore = DataStore.getInstance();
        //this.ctx = this.dataStore.ctx;
        this.ctx = ctx;
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    /**
     * img 传入Image对象
     * srcX 要剪裁的起始X坐标
     * srcY 要剪裁的起始Y坐标
     * srcW 剪裁的宽度
     * srcH 剪裁的高度
     * x 放置的x坐标
     * y 放置的y坐标
     * width 要使用的宽度
     * height 要使用的高度
     */
    draw() {
        //log(this.ctx)

        //log(this.srcX)
        this.ctx.drawImage(this.img, this.srcX, this.srcY, this.srcW, this.srcH, this.x, this.y, this.width, this.height);
    }
}

//# sourceMappingURL=Sprite-compiled.js.map