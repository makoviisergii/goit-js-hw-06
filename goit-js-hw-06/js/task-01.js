const ulCategories = document.querySelector("#categories");

const items = ulCategories.children;

const itemsArr = [...items];

function getCategoryInfo(itemsArr) {
  console.log(`Number of categories: ${itemsArr.length}`);
  itemsArr.map((item) => {
    const categoryName = item.firstElementChild.textContent;
    const categoryQuantity = item.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryQuantity}`);
  });
}
getCategoryInfo(itemsArr);
