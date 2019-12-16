export class Controller {
    constructor(view, model){
        this.view = view;
        this.model = model;
        this.windowListeners();
        this.addUIListeners();
        this.addBackgroundListeners();
        this.addShapeListeners();
        this.generateShape();
    }

    windowListeners() {
        window.onresize = () => {
            this.scaleScene();
        }
    }

    addUIListeners() {
        this.view.gravityIncrement.onpointerup = this.onGravityIncrement.bind(this);
        this.view.gravityDecrement.onpointerup = this.onGravityDecrement.bind(this);
        this.view.shapesIncrement.onpointerup = this.onShapesIncrement.bind(this);
        this.view.shapesDecrement.onpointerup = this.onShapesDecrement.bind(this);
    }

    addBackgroundListeners () {
        this.view.background.on('pointerdown', (event) => {
            this.generateShape(event.data.global);
        });
    }

    addShapeListeners() {
        this.view.appView.interactive = true;
        this.view.appView.on("pointerdown", (event) => {
            this.deleteShape(event.target);
        })
    }

    scaleScene() {

    }

    onGravityIncrement() {
        this.model.incrementGravity();
        this.view.gravityOutput.value = this.model.gravity;
    }

    onGravityDecrement() {
        this.model.decrementGravity();
        this.view.gravityOutput.value = this.model.gravity;
    }

    onShapesIncrement() {
        this.model.shapesIncrement();
        this.view.shapesOutput.value = this.model.shapesPerSec;
    }

    onShapesDecrement() {
        this.model.shapesDecrement();
        this.view.shapesOutput.value = this.model.shapesPerSec;
    }

    generateShape(position) {
        this.view.createShape(position);
        this.updateInfo();
    }

    moveShapes() {
        this.view.shapes.forEach((shape) => {
            shape.move(this.model.gravity);
        })
    }

    cleanSceneFromShapes() {
        this.view.shapes.forEach((shape) => {
            if (!shape) return;
            if (shape.view.position.y > 500) {
                this.deleteShape(shape.view);
            }
        })
    }

    deleteShape(target) {
        if (target.hasOwnProperty("name") && target.name == "shape") {
            this.view.shapes.forEach((shape) => {
                if (shape.view.index == target.index) {
                    shape.view.destroy();
                    this.view.shapes.splice(this.view.shapes.indexOf(shape),1);
                }
            })
        }
        this.updateInfo()
    }

    updateInfo() {
        this.model.shapesArea = 0;

        this.view.shapes.forEach((shape) => {
            this.model.shapesArea += shape.area;
        });
        this.view.shapesArea.innerHTML = this.model.shapesArea;

        this.view.shapesNumber.innerHTML = this.view.shapes.length;
    }

}