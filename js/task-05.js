const outputEL = document.getElementById("name-output");
const inputEL = document.getElementById("name-input");

inputEL.addEventListener("input", event => {

    if (event.data !== null) {
        if (inputEL.value.length === 1) {
            outputEL.textContent = '';
        }

        outputEL.textContent += event.data;

    } else if (inputEL.value.length === 0) {

        outputEL.textContent = "Anonymous";
    }
});

inputEL.addEventListener("keyup", event => {

    event.key === 'Backspace' ? outputEL.textContent = inputEL.value : undefined;
});