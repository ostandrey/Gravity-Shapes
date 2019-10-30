import {Graphics, Point} from "pixi.js";

const generateCoord = (min,max) => {
    return Math.ceil(Math.random() * (max - min) + min)
};

const SHAPE_HEIGHT = 100;
const SHAPE_WIDTH = 100;
const RADIUS = generateCoord(SHAPE_WIDTH / 2, SHAPE_HEIGHT / 2);
const SECOND_RADIUS = generateCoord(SHAPE_WIDTH / 2, SHAPE_WIDTH);

export class Shape {
    constructor () {
        this.view = new Graphics();
        this.path = [];
        this.area = 0;
        this.create();
        this.getArea();
    }

    create () {
        this.view.pivot = new Point(0, 0);
        this.view.interactive = true;
        this.view.buttonMode = true;
        this.view.on("pointerdown", () => {
             this.view.destroy();
        });

    }

    setPosition (x, y) {
        this.view.x = x;
        this.view.y = y;
    }

    getArea() {
        let vertexes = [];
        for(let i = 0; i < this.path.length / 2; i++) {
            vertexes[i] = {
                x: this.path[2 * i],
                y: this.path[2 * i + 1]
            }
        }
        let area = 0;
        for (let i = 0; i < vertexes.length - 1; i++){
            area += vertexes[i].x * vertexes[i + 1].y;
        }
        area += vertexes[vertexes.length - 1].x * vertexes[0].y;
        for (let i = 0; i < vertexes.length - 1; i++){
            area -= vertexes[i].y * vertexes[i + 1].x;
        }
        area -= vertexes[vertexes.length - 1].y * vertexes[0].x;
        this.area = Math.abs(area) / 2;
        console.log(this.area);
    }

    move (delta) {
        this.view.y += delta;
    }
}

export class Triangle extends Shape {
    create () {
        this.path = [
            generateCoord(0, SHAPE_WIDTH), generateCoord(0, SHAPE_HEIGHT / 2),
            generateCoord(SHAPE_WIDTH / 2, SHAPE_WIDTH), generateCoord(SHAPE_HEIGHT / 2, SHAPE_HEIGHT),
            generateCoord(0, SHAPE_WIDTH / 2), generateCoord(SHAPE_HEIGHT / 2, SHAPE_HEIGHT)
        ];
        super.create();
        this.view.beginFill(0xDE3249);
        this.view.drawPolygon(this.path);
        this.view.endFill();


    }
}

export class Rectangle extends Shape {
    create () {
        this.path = [
            generateCoord(0, SHAPE_WIDTH / 2), generateCoord(0, SHAPE_HEIGHT / 2),
            generateCoord(SHAPE_WIDTH / 2, SHAPE_WIDTH), generateCoord(0, SHAPE_HEIGHT / 2),
            generateCoord(SHAPE_WIDTH / 2, SHAPE_WIDTH), generateCoord(SHAPE_HEIGHT / 2, SHAPE_HEIGHT),
            generateCoord(0, SHAPE_WIDTH / 2), generateCoord(SHAPE_HEIGHT / 2, SHAPE_HEIGHT)
        ];
        super.create();
        this.view.beginFill(0xDE3249);
        this.view.drawPolygon(this.path);
        this.view.endFill();
    }
}


export class Pentagon extends  Shape {
    create () {
        this.path = [
             generateCoord(0, SHAPE_WIDTH / 3), generateCoord(0, SHAPE_HEIGHT / 2),
             generateCoord(SHAPE_WIDTH / 3 , 2 * SHAPE_WIDTH / 3), generateCoord(0, SHAPE_HEIGHT / 2),
             generateCoord(2 * SHAPE_WIDTH / 2, SHAPE_WIDTH), generateCoord(0, SHAPE_HEIGHT / 2),
             generateCoord(SHAPE_WIDTH / 2, SHAPE_WIDTH), generateCoord(SHAPE_HEIGHT / 2, SHAPE_HEIGHT),
             generateCoord(0, SHAPE_WIDTH / 2), generateCoord(SHAPE_HEIGHT / 2, SHAPE_HEIGHT)
        ];
        super.create();
        this.view.beginFill(0xDE3249);
        this.view.drawPolygon(this.path);
        this.view.endFill();
    }

}

export class Circle extends Shape {
    create () {
        super.create();
        this.view.lineStyle(0);
        this.view.beginFill(0xDE3249, 1);
        this.view.drawCircle(100, 100, RADIUS);
        this.view.endFill();
    }

    getArea() {

        this.area = Math.ceil(Math.PI * Math.pow(RADIUS,2));
        console.log(this.area);
    }
}

export class Ellipse extends Shape {
    create() {
        super.create();
        this.view.lineStyle();
        this.view.beginFill(0xDE3249);
        this.view.drawEllipse(150,40, RADIUS, SECOND_RADIUS);
        this.view.endFill();
    }

    getArea() {
        this.area = Math.ceil(Math.PI * RADIUS * SECOND_RADIUS);
        console.log(this.area);
    }
}

export class ShapesFactory {
    constructor() {}

    generate() {
        let shape;
        let shapeIndex = Math.round(Math.random() * (5 - 1) + 1);
        switch (shapeIndex) {
            case 1:
                shape = new Triangle();
                break;
            case 2:
                shape = new Rectangle();
                break;
            case 3:
                shape = new Pentagon();
                break;
            case 4:
                shape = new Circle();
                break;
            case 5:
                shape = new Ellipse();
                break;
        }
        return shape;
    }
};