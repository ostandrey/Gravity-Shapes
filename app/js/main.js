import {Application, Graphics, Attribute,Point} from "pixi.js";
import {Shape} from "./shape";

const game = document.getElementById('game');
const app = new Application({ width: game.clientWidth, height: game.clientHeight });
game.appendChild(app.view);

const background = new Graphics();
background.beginFill(0x000000);
background.drawRect(0, 0, app.view.width, app.view.height);
background.endFill();
background.interactive = true;

const square = new Graphics();

// Rectangle
square.beginFill(0xDE3249);
square.drawRect(50, 50, 100, 100);
square.endFill();
square.interactive = true;
square.on("pointerdown", () => {
    square.destroy();
});

app.stage.addChild(background);
app.stage.addChild(square);

background.on("pointerdown", (event) => {
    const shape = new Shape();
    background.addChild(shape.g);
    console.log(event);
});

const triangle = new Graphics();
let t = [100, 325, 150, 200, 200, 300];
// Triangle
triangle.beginFill(0xDE3249);
triangle.drawPolygon(t);
triangle.endFill();

triangle.interactive = true;
triangle.on("pointerdown", () => {
    triangle.destroy();
});

app.stage.addChild(triangle);


const pentagon = new Graphics();
//Pentagon
let p = [400, 150, 450, 120, 500, 150, 475, 200, 425, 200];
pentagon.beginFill(0xDE3249);
pentagon.drawPolygon(p);
pentagon.endFill();
pentagon.interactive = true;
pentagon.on("pointerdown", () => {
    pentagon.destroy();
});
app.stage.addChild(pentagon);

const hexagon = new Graphics();
//Hexagon
let h = [405, 250, 450, 220, 495, 250, 495, 300,450,330, 405, 300];

hexagon.lineStyle(0);
hexagon.beginFill(0x3500FA, 1);
hexagon.drawPolygon(h);
hexagon.endFill();
hexagon.interactive = true;
hexagon.on("pointerdown", () => {
    hexagon.destroy();
});
app.stage.addChild(hexagon);

// // ARC ////
const arc = new Graphics();

arc.lineStyle(5, 0xAA00BB, 1);
arc.arc(610, 100, 35, 2.9* Math.PI, 1.3 * Math.PI);
arc.arc(625,71,35,Math.PI,1.5 * Math.PI);
arc.arc(625, 96, 60, 3.5 * Math.PI, 3.5* Math.PI / 2.1);
arc.arc(677, 96, 60, 3.5 * Math.PI, 3.5* Math.PI / 2);
arc.arc(716, 91, 30, 3.6 * Math.PI, 4.5* Math.PI / 2);
arc.arc(700, 113, 35, 4 * Math.PI, 5.4* Math.PI / 2);
arc.arc(640, 130, 40, 4.18 * Math.PI, 5.6* Math.PI / 2);
arc.arc(605, 125, 30, 4.5 * Math.PI, 6.3* Math.PI / 2);
arc.endFill();
arc.interactive = true;
arc.on("pointerdown", () => {
    arc.destroy();
});
app.stage.addChild(arc);

let shapesOutput = document.getElementById('shapes-per-sec-output');
let shapesDecrement = document.getElementById('shapes-per-sec-decrement');
let shapesIncrement = document.getElementById('shapes-per-sec-increment');

shapesDecrement.addEventListener('click',function () {
    if(parseInt(shapesOutput.value)>1) {
        shapesOutput.value = parseInt(shapesOutput.value) - 1;
    }
    else if (parseInt(shapesOutput.value)==1){
        shapesDecrement.disabled = true;
    }

});

shapesIncrement.addEventListener('click', function () {
    if (parseInt(shapesOutput.value)<10)
        shapesOutput.value = parseInt(shapesOutput.value)+1;
});
let gravityOutput = document.getElementById('gravity-output');
let gravityDecrement = document.getElementById('gravity-decrement');
let gravityIncrement = document.getElementById('gravity-increment');
gravityOutput.addEventListener('click',function () {
    if(parseInt(gravityOutput.value)>1) {
        gravityOutput.value = parseInt(gravityOutput.value) - 1;
    }
    else if (parseInt(gravityOutput.value)==1){
        gravityDecrement.disabled = true;
    }

});

gravityIncrement.addEventListener('click', function () {
    if (parseInt(gravityOutput.value)<10)
        gravityOutput.value = parseInt(gravityOutput.value)+1;
});
