#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";

async function welcome() {
  console.log(
    chalk
      .rgb(40, 93, 237)
      .bold(`\t\tWord Counter \n\n\tDeveloped by Ayyan Ali Khan`)
  );

  setTimeout(() => {
    const spinner = ora("Initializing..").start();
    spinner.color = "blue";
    setTimeout(() => {
      spinner.stop();
      main();
    }, 2000);
  }, 2000);
}
await welcome();

async function main() {
  const res = await inquirer.prompt({
    name: "para",
    message: chalk.rgb(163, 51, 242)("Enter your paragraph :"),
    type: "input",
  });

  let paragraph: string = res.para;
  let char = paragraph.length;
  const words = paragraph.split(/\W+/);
  const wordArray = words.filter((word) => word.length > 0);
  const totalWord = wordArray.length;

  let result = {
    "Total number of words": totalWord,
    "Total number of characters": char,
  };

  console.table(result);

  const ans = await inquirer.prompt({
    name: "decision",
    message: chalk.rgb(163, 51, 242)("Want to play again?"),
    type: "confirm",
    default: true,
  });

  let decision = ans.decision;

  if (decision == true) {
    console.clear();
    welcome();
  } else {
    console.log(chalk.red("Closing..."));
  }
}
