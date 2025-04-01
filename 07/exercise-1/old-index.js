//document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("#external-link");
anchorElement.href = "https://naver.com";

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "Go Google";

let firstParagraph = document.querySelector("p");
firstParagraph.append(newAnchorElement);

let firstH1Element = document.querySelector("h1");
//firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element);

firstParagraph.parentElement.append(firstParagraph);
firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>.";
