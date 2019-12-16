import {Application} from "pixi.js";
import {Controller} from "./controller";
import {Model} from "./model";
import {View} from "./view";

const game = document.getElementById('game');
const app = new Application({ width: 640, height: 480 });
game.appendChild(app.view);

let model = new Model();
let view = new View(app.stage);
let controller = new Controller(view, model);

let counter = 0;

app.ticker.add((delta) => {
    counter += delta;
    if (counter >= app.ticker.FPS / model.shapesPerSec) {
        controller.generateShape();
        counter = 0;
    }
    controller.moveShapes();
    controller.cleanSceneFromShapes();
});
