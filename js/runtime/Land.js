/**
 * @Date:   2018-03-20T17:33:51+08:00
 * @Last modified time: 2018-03-20T17:38:29+08:00
 */
 //不会移动的陆地类
 import {Sprite} from "../base/Sprite.js"
 export class Land extends Sprite{
     constructor() {
         const image = Sprite.getImage('land');
         super(image, 0, 0,
            image.width, image.height,
             0, window.innerHeight - image.height,
             image.width, image.height);
         //地板的水平变化坐标
         this.landX = 0
         //地板的移动速度
         this.landSpeed = 2

     }
     draw() {
         //this.landX = this.landX + this.landSpeed
         if(this.landX > (this.img.width - window.innerWidth)) {
             this.landX = 0;
         }
         this.landX = this.landX + this.landSpeed
         super.draw(this.img,
             this.srcX,
             this.srcY,
             this.srcW,
             this.srcH,
             -this.landX,
             this.y,
             this.width,
             this.height)
     }
 }
