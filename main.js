const moment = require("moment");
const chalk = require("chalk");


console.log("It is " + chalk.blue(moment().format('LLLL')) + ".");

console.log("It is the " + chalk.red(moment().format('DDD') + "th") + " day of the year.");

let startOfDay = moment(0, "H").unix();
let currentTime = moment().unix();
let answer = (currentTime - startOfDay);

console.log("It is " + chalk.cyan(answer) + " seconds into the day.");
// console.log("NOW:", moment().unix());
// console.log("BEGINNING OF DAY", moment(0, "H").unix());
// let startOfDay = moment(0, "H").unix();
// let currentTime = moment().unix();
// let answer = (startOfDay - currentTime);


  if (moment().isDST() === true) {
    console.log("It " + chalk.green("is") + " during Daylight Savings Time.");
  } else {
    console.log("It " + chalk.green("is not") + " during Daylight Savings Time.");
  }

  if (moment().isLeapYear() === false) {
    console.log("It " + chalk.red("is not") + " a leap year.");
} else {
  console.log("It " + chalk.red("is") + " a leap year.");
}
