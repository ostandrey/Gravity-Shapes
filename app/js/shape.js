import {Graphics, Point} from "pixi.js";

export class Shape {
    constructor() {
        this.g = new Graphics();
        // Rectangle
        this.g.beginFill(0xDE3249);
        this.g.drawRect(200,200, 100, 100);
        this.g.endFill();
        this.g.pivot = new Point(this.g.width/2, this.g.height/2);
        this.g.interactive = true;
        this.g.on("pointerdown", () => {
            this.g.destroy();
        });
    }
}