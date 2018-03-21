//资源文件加载器，确保canvas在图片资源加载完成后才进行渲染
import { Resources } from "./Resources.js";

export class ResourceLoader {
    constructor() {
        this.map = new Map(Resources);
        for (let [key, value] of this.map) {
            const image = new Image();
            //const image = wx.createImage();
            image.src = value;
            //console.log(image)
            this.map.set(key, image);
            //console.log(this.map.values())
        }
    }
    onLoaded(callback) {
        let loadedCount = 0;
        for (let value of this.map.values()) {
            //console.log(this.map.values())
            //console.log(typeof value, value)
            value.onload = () => {
                loadedCount++;
                if (loadedCount >= this.map.size) {
                    callback(this.map);
                }
            };
        }
    }
    static create() {
        return new ResourceLoader();
    }
}

//# sourceMappingURL=ResourceLoader-compiled.js.map