function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("div#boxes");

buttonCreateEl.addEventListener("click", (event) => {
    let size = 30;
    for (let i = 0; i < Number(inputEl.value); i++) {

        let elBox = document.createElement("div");
        elBox.style.width = size + "px";
        elBox.style.height = size + "px";
        elBox.style.backgroundColor = getRandomHexColor();
        boxesEl.append(elBox);
        size += 10;
    }
});

buttonDestroyEl.addEventListener("click", (event) => {
    const rmBoxes = [...boxesEl.childNodes];
    rmBoxes.forEach(element => {
        element.remove()
    })
});