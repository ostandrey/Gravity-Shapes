import {Application, Graphics} from "pixi.js";
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