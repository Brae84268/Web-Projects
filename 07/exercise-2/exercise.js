// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"

const firstBtn = document.querySelector("section button");
const secondBtn = document.getElementById("second-btn");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

function consoleDirFirstBtn() {
  console.dir(firstBtn);
}
firstBtn.addEventListener("click", consoleDirFirstBtn);

function consoleDirSecondBtn(event) {
  console.dir(event.target);
}
secondBtn.addEventListener("click", consoleDirSecondBtn);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

const firstParagraph = document.body.children[2].children[1];
console.dir(firstParagraph);
//const thirdParagraph = document.body.children[2].children[3];
const thirdParagraph = firstParagraph.nextElementSibling.nextElementSibling;
console.dir(thirdParagraph);

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
//firstBtn.addEventListener("click",);

// function removeParagraph() {
//   thirdParagraph.remove();
// }
// firstBtn.addEventListener("click", removeParagraph);

// function changeBackgroudColor() {
//   firstParagraph.style.backgroundColor = "blue";
// }
// secondBtn.addEventListener("click", changeBackgroudColor);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function changeBackgroudColor() {
  firstParagraph.classList.add("blue-bg");
}
secondBtn.addEventListener("click", changeBackgroudColor);
