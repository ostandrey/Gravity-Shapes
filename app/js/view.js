import {Graphics} from "pixi.js";
import {ShapesFactory} from "./shape";

export class View {
    constructor (scene) {
        this.appView = scene;
        this.background;
        this.shapesFactory = new ShapesFactory();
        this.shapesOutput = document.getElementById('shapes-per-sec-output');
        this.shapesDecrement = document.getElementById('shapes-per-sec-decrement');
        this.shapesIncrement = document.getElementById('shapes-per-sec-increment');
        this.gravityOutput = document.getElementById('gravity-output');
        this.gravityDecrement = document.getElementById('gravity-decrement');
        this.gravityIncrement = document.getElementById('gravity-increment');
        this.shapesArea = document.getElementById('shapes_area');
        this.shapesNumber = document.getElementById('shapes_amount');
        this.createBackground();
    }

    createBackground () {
        this.background = new Graphics();
        this.background.interactive = true;
        this.background.buttonMode = true;
        this.background.on("pointerdown", () => {
            console.log("Hello")
        });
        this.background.beginFill(0x000000);
        this.background.drawRect(0, 0, this.appView.width, this.appView.height);
        this.background.endFill();
        this.appView.addChild(this.background);
        console.log(this.background)
    }

    createShape () {
        let shape = this.shapesFactory.generate();
        this.appView.addChild(shape.view);
    }
}