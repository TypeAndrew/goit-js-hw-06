const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

//et html = "";
const elements=[];
ingredients.forEach((element,key) => {
  
  let itemList = document.createElement("li");
  itemList.textContent = element;
  itemList.classList.add("item");
  elements.push(itemList);
  //list.append(itemList);
  //html += `<li class="item">${element}</li>`;
  
});
list.append(elements[0], elements[1], elements[2], elements[3], elements[4], elements[5]);
//list.innerHTML = html;

//liEl.textContent = element;
//liEl.className = "item";
//list.append(liEl);