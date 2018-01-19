var chalk = require("chalk");

var line1 = "Hello " + chalk.yellow("World");
var line2 = chalk.cyan(chalk.bold("I ")) + chalk.red(chalk.italic("am")) + chalk.magentaBright(chalk.bold(" HERE!!"));

console.log(line1);
console.log(line2);
