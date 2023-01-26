function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector("button.change-color");
const Color = document.querySelector("span.color");
const body = document.body;
changeColorBtn.addEventListener("click", function () {
  const randomHexColor = getRandomHexColor();
  console.log(randomHexColor);
  body.style.backgroundColor = randomHexColor;
  Color.textContent = `${randomHexColor}`;
});
