const SHAPES_PER_SECOND_MIN = 1;
const SHAPES_PER_SECOND_MAX = 10;

const GRAVITY_MIN = 1;
const GRAVITY_MAX = 10;

export class UI {
  constructor() {
      this.shapesOutput = document.getElementById('shapes-per-sec-output');
      this.shapesDecrement = document.getElementById('shapes-per-sec-decrement');
      this.shapesIncrement = document.getElementById('shapes-per-sec-increment');
      this.gravityOutput = document.getElementById('gravity-output');
      this.gravityDecrement = document.getElementById('gravity-decrement');
      this.gravityIncrement = document.getElementById('gravity-increment');
      this.addEventListeners();
  };

  addEventListeners() {
      let shapesOutput = Number(this.shapesOutput.value);
      this.shapesDecrement.onpointerup = () => {
          shapesOutput--;
          if (shapesOutput < SHAPES_PER_SECOND_MIN) this.shapesOutput = SHAPES_PER_SECOND_MIN
      };
      this.shapesIncrement.onpointerup = () => {
          shapesOutput++;
          if (shapesOutput > SHAPES_PER_SECOND_MAX) this.shapesOutput = SHAPES_PER_SECOND_MAX
      }
  }
}
