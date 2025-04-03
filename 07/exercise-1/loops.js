//for 반복문문
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//for-of 반복문문
const users = ["Brae", "Max", "Anna", "Joel"];
for (const user of users) {
  console.log(user);
}

//for-in 반복문
const loggedInUser = {
  name: "Brae",
  age: 25,
  isAdmin: true,
};
for (const prop in loggedInUser) {
  console.log(prop);
  console.log(loggedInUser[prop]);
}

//while 반복문
let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}
console.log("Done!");
