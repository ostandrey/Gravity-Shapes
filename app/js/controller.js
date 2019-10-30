export class Controller {
    constructor(view, model){
        this.view = view;
        this.model = model;
        this.addUIListeners();
        this.generateShape();
        // this.addBackgroundListeners();
    }

    addUIListeners() {
        this.view.gravityIncrement.onpointerup = this.onGravityIncrement.bind(this);
        this.view.gravityDecrement.onpointerup = this.onGravityDecrement.bind(this);
        this.view.shapesIncrement.onpointerup = this.onShapesIncrement.bind(this);
        this.view.shapesDecrement.onpointerup = this.onShapesDecrement.bind(this);
    }

    addBackgroundListeners () {
        this.view.background.on('pointerdown', () => {
            this.generateShape()
        });
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
    generateShape () {
        this.view.createShape();
    }

}