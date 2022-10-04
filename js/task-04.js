
let counterValue = 0;
const textContentEl = document.getElementById("value");
const buttonDecrement = document.querySelector('button[data-action="decrement"]');

buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    textContentEl.textContent = counterValue;
    
})

const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    textContentEl.textContent = counterValue;
    
})