const textInput = document.querySelector("#validation-input");

const textLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", function (event) {
  if (event.currentTarget.value.length == textLength) {
    textInput.classList.add("valid");
    return;
  }
  textInput.classList.add("invalid");
});
