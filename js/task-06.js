const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("input", () => {
    if (inputEl.dataset.length === inputEl.value.length.toString()) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");

    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");

    }


})



console.log(inputEl);