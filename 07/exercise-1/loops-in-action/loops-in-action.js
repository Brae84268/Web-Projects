const sumBtnElement = document.querySelector("#calculator button");

function sum() {
  const userNumInputElement = document.getElementById("user-number");
  const enterdNum = userNumInputElement.value;

  let sumUpToNum = 0;

  for (let i = 0; i <= enterdNum; i++) {
    sumUpToNum = sumUpToNum + i;
  }

  const resultElement = document.getElementById("calculated-sum");

  resultElement.textContent = sumUpToNum;
  resultElement.style.display = "block";
}

sumBtnElement.addEventListener("click", sum);

const highlightLinksBtnElement = document.querySelector("#highlight-links button");

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchor of anchorElements) {
    anchor.classList.add("highlight");
  }
}

highlightLinksBtnElement.addEventListener("click", highlightLinks);
