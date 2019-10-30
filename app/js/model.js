const SHAPES_PER_SECOND_MIN = 1;
const SHAPES_PER_SECOND_MAX = 10;

const GRAVITY_MIN = 1;
const GRAVITY_MAX = 10;

export class Model {
    constructor () {
        this.gravity = 1; // range 1..10
        this.shapesPerSec = 1;
        this.shapesArea = 0;
        this.shapesNumber = 0;
    }

    incrementGravity() {
        this.gravity++;
        if (this.gravity > GRAVITY_MAX) this.gravity = GRAVITY_MAX;
    }

    decrementGravity () {
        this.gravity--;
        if (this.gravity < GRAVITY_MIN) this.gravity = GRAVITY_MIN;
    }

    shapesIncrement () {
        this.shapesPerSec++;
        if (this.shapesPerSec > SHAPES_PER_SECOND_MAX) this.shapesPerSec = SHAPES_PER_SECOND_MAX;
    }

    shapesDecrement () {
        this.shapesPerSec--;
        if (this.shapesPerSec < SHAPES_PER_SECOND_MIN) this.shapesPerSec = SHAPES_PER_SECOND_MIN;
    }
}