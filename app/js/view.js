import {Graphics, Point} from "pixi.js";
import {ShapesFactory} from "./shape";

export class View {
    constructor (scene) {
        this.appView = scene;
        this.background = new Graphics();
        this.shapes = [];
        this.shapesFactory = new ShapesFactory();
        this.shapesOutput = document.getElementById('shapes-per-sec-output');
        this.shapesDecrement = document.getElementById('shapes-per-sec-decrement');
        this.shapesIncrement = document.getElementById('shapes-per-sec-increment');
        this.gravityOutput = document.getElementById('gravity-output');
        this.gravityDecrement = document.getElementById('gravity-decrement');
        this.gravityIncrement = document.getElementById('gravity-increment');
        this.shapesArea = document.getElementById('shapes_area');
        this.shapesNumber = document.getElementById('shapes_amount');
        this.shapeCurrentIndex = 0;
        this.createBackground();
    }

    createBackground () {
        this.background.beginFill(0xffffff);
        this.background.drawRect(0, 0, 700, 500);
        this.background.endFill();
        this.appView.addChild(this.background);
        this.background.interactive = true;
        this.background.buttonMode = true;
    }

    createShape (position) {
        let coordinates = position;
        let shape = this.shapesFactory.generate();
        if (!position) coordinates = new Point(Math.random() * this.appView.width, -100);
        shape.setPosition(coordinates.x, coordinates.y);
        shape.view.index = this.shapeCurrentIndex++;
        this.shapes.push(shape);
        this.appView.addChild(shape.view);
    }
}