"use strict";

let fullName = "Marissa Jacklyn";

let age = 24;

const birthday = "July 7th";

let pineapplePizza = true;

const lifeEvents = [
  "I grew up in Romeo",
  "I graduated cosmetology school",
  "I got my first apartment",
  "I started my schooling for coding",
];

if (pineapplePizza) {
  console.log(
    `My name is ${fullName} and I like pineapples on my pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${fullName} and I'm not into pineapple on my pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  counter++;
  if (randomNumber !== 5) {
    console.log(`${randomNumber} is !== 5`);
  } else {
    console.log(
      `5 ==== 5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}

//extended challenge
let hours = 50;
let wage = 10;

let paycheck = null;

if (hours > 40) {
  let overtimeHours = hours - 40;
  //   console.log(overtimeHours);
  let regularHours = 40;
  //   console.log(regularHours);
  let overtimePay = overtimeHours * wage * 1.5;
  //   console.log(overtimePay);
  let regularPay = regularHours * wage;
  //   console.log(regularPay);
  let otPaycheck = regularPay + overtimePay;
  console.log(otPaycheck);
  paycheck = otPaycheck;
} else {
  console.log(wage * hours);
  paycheck = hours * wage;
}

console.log(
  `It would take ${Math.ceil(
    1000000 / paycheck
  )} weeks make one million dollars`
);
