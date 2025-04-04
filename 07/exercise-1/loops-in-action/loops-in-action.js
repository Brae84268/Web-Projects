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

const dummyUserData = {
  firstName: "Kim",
  lastName: "Brae",
  age: 25,
};

const displayUserDataBtnElement = document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";

  for (const userData in dummyUserData) {
    const newUserDataLiElement = document.createElement("li");
    const outputText = userData.toUpperCase() + ": " + dummyUserData[userData];
    newUserDataLiElement.textContent = outputText;
    outputDataElement.append(newUserDataLiElement);
  }
}

displayUserDataBtnElement.addEventListener("click", displayUserData);

const rollDiceBtnElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumOfDiceRolls() {
  const targetNumInputElement = document.getElementById("user-target-number");
  const diceRollsLiElement = document.getElementById("dice-rolls");

  const enterdNum = targetNumInputElement.value;
  diceRollsLiElement.innerHTML = " ";

  let hasRolledTargetNum = false;
  let numOfRolls = 0;

  while (!hasRolledTargetNum) {
    const rolledNum = rollDice();
    // if (rolledNum == enterdNum) {
    //   hasRolledTargetNum = true;
    // }
    numOfRolls++;
    const newRollLiElement = document.createElement("li");
    const outputText = "Roll " + numOfRolls + ": " + rolledNum;
    newRollLiElement.textContent = outputText;
    diceRollsLiElement.append(newRollLiElement);
    hasRolledTargetNum = rolledNum == enterdNum;
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumElement = document.getElementById("output-target-number");

  outputTargetNumElement.textContent = enterdNum;
  outputTotalRollsElement.textContent = numOfRolls;
}

rollDiceBtnElement.addEventListener("click", deriveNumOfDiceRolls);
