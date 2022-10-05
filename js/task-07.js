let spanEl = document.getElementById("text");
const inputEl = document.getElementById("font-size-control");

inputEl.addEventListener("input", () => {

    spanEl.style.fontSize = inputEl.value + "px";

});