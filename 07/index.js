let age = 25;
let userName = "Dong Hyun" + "Kim";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "Seoul",
  salery: 9500000,
};

let adultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

adultYears = calculateAdultYears(age);
alert(adultYears);

age = 28;
adultYears = calculateAdultYears(age);

alert(adultYears);
