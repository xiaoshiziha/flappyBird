/**
 * @Date:   2018-03-20T17:40:14+08:00
 * @Last modified time: 2018-03-20T17:40:14+08:00
 */
//导演类，控制游戏的逻辑
import { DataStore } from "./base/DataStore.js";
import { UpPencil } from "./runtime/UpPencil.js";
import { DownPencil } from "./runtime/DownPencil.js";

export class Director {
    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }
    constructor() {
        this.dataStore = DataStore.getInstance();
    }

    createPencil() {
        const minTop = Window.innerHeight / 8;
        const maxTop = Window.innerHeight / 2;
        const top = minTop + Math.random() * (maxTop - minTop);
        this.dataStore.get('pencils').push(new UpPencil(top));
        this.dataStore.get('pencils').push(new DownPencil(top));
    }
    run() {
        this.dataStore.get('background').draw();
        this.dataStore.get('land').draw();
        this.dataStore.get('pencils').forEach(function (value) {
            value.draw();
        });
        let timer = setInterval(() => this.run());
        this.dataStore.put('timer', timer);
    }
}

//# sourceMappingURL=Director-compiled.js.map