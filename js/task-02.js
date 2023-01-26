const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrList = document.getElementById("ingredients");

const ingrediensLi = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = `${ingredient}`;
  li.classList.add("item");
  return li;
});

ingrList.append(...ingrediensLi);
