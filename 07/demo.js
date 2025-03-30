let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

console.dir(productNameInputElement);

let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingCharaters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharaters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
