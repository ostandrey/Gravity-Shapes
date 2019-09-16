import {a} from './file.js';

console.log(a);
const PIXI= require('pixi.js')
const renderer = new PIXI.CanvasRenderer(window.innerWidth);
document.body.appendChild(renderer.view)

const app = new PIXI.Application({ antialias: true });
document.body.appendChild(app.view);
const  geometry = new PIXI.Geometry()
    .addAttribute('aVertexPosition',[-100,-50,100,-50,0,100]);

const triangle = new PIXI.Mesh(geometry);
triangle.position.set(200,300);
app.stage.addChild(triangle);


const graphics = new PIXI.Graphics();

// Rectangle
graphics.beginFill(0xDE3249);
graphics.drawRect(50, 50, 100, 100);
graphics.endFill();