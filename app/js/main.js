import {Application, Graphics} from "pixi.js";
import {Rectangle, Shape, Tetraedr, Pentangle, Circle, Ellipse} from "./shape";
import {UI} from "./ui_logic";
import {Controller} from "./controller";
import {Model} from "./model";
import {View} from "./view";

const game = document.getElementById('game');
const app = new Application({ width: game.clientWidth, height: game.clientHeight });
game.appendChild(app.view);

let model = new Model();
let view = new View(app.stage);
let controller = new Controller(view, model);

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
// app.stage.addChild(arc);