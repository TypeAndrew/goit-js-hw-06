const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

let html = "";
ingredients.forEach((element) => { 
  
  html += `<li class="item">${element}</li>`;
  
})

list.innerHTML = html;

//liEl.textContent = element;
//liEl.className = "item";
//list.append(liEl);