function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6,0)}`;
}

const bodyEl = document.body;
const spanEl = document.querySelector("span.color");
const buttonEl = document.querySelector("button.change-color");

buttonEl.addEventListener("click", (event) => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    spanEl.textContent = getRandomHexColor(); 
});