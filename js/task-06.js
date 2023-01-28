const textInput = document.querySelector("#validation-input");

const textLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", function (event) {
  if (event.currentTarget.value.length != textLength) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
    return;
  }
  textInput.classList.remove("invalid");
  textInput.classList.add("valid");
});
