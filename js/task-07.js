let spanEl = document.getElementById("text");
const inputEl = document.getElementById("font-size-control");
spanEl.style.fontSize = (Number(inputEl.max) - Number(inputEl.min)) / 2 +"px";

inputEl.addEventListener("input", () => {

    spanEl.style.fontSize = inputEl.value + "px";

});