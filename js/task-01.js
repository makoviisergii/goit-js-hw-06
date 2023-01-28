const ulCategories = document.querySelector("#categories");

const items = ulCategories.children;
// items це HTMLCollection тому зробив з него масив щоб forEach-ом перебрати
const itemsArr = [...items];
console.log(`Number of categories: ${itemsArr.length}`);
itemsArr.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const categoryQuantity = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryQuantity}`);
});
