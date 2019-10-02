export {arrow};
function arrow (){

    let shapesOutput = document.getElementById('shapes-per-sec-output');
    let shapesDecrement = document.getElementById('shapes-per-sec-decrement');
    let shapesIncrement = document.getElementById('shapes-per-sec-increment');

    const output = parseInt(shapesOutput.value);
    const min = 1;
    const max = 10;


    shapesDecrement.addEventListener('click',function () {
        //TODO: define variables of range min/max; +++
        //      declare variable to use parseInt(shapesOutput.value); +++
        //      create one function that has argument of increment/decrement
        //      and returns value of output field for both shapes and gravity;
        //      add this func as listener to all buttons


        if (output > min) {
            shapesOutput.value = output - min;
        }
        else {
            shapesDecrement.disabled = true;
        }

    });
    shapesIncrement.addEventListener('click', function () {
        if (output < max)
            shapesOutput.value = output + min;
    });

    let gravityOutput = document.getElementById('gravity-output');
    let gravityDecrement = document.getElementById('gravity-decrement');
    let gravityIncrement = document.getElementById('gravity-increment');

    gravityDecrement.addEventListener('click',function () {
        if(output > min) {
            gravityOutput.value = output - min;
        }
        else {
            gravityDecrement.disabled = true;
        }

    });

    gravityIncrement.addEventListener('click', function () {
        if (output < max) {
            gravityOutput.value = output + min;
        }
    });
}