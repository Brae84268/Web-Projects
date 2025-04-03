const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

console.dir(productNameInputElement);

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharaters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharaters;

  if (remainingCharaters === 0) {
    productNameInputElement.classList.add("error");
    remainingCharsElement.classList.add("error");
  } else if (remainingCharaters <= 10) {
    productNameInputElement.classList.add("warning");
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.remove("error");
    remainingCharsElement.classList.remove("error");
  } else {
    productNameInputElement.classList.remove("warning");
    remainingCharsElement.classList.remove("warning");
  }
  if (remainingCharaters <= 0) {
    remainingCharsElement.textContent = "0";
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
