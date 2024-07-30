#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

let api =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
let decision: boolean;

async function getData(){
  let quiz = await fetch(api);
  let result = await quiz.json();
  return result.results;
}

let data = await getData();
async function welcome() {
  console.clear()
  console.log(
    chalk.rgb(141, 11, 212).bold(`\t\tQuiz App\n\tDeveloped by Ayyan Ali Khan`)
  );
  setTimeout(() => {
    main();
  }, 2000);
}
welcome();
async function main() {
  let score: number = 0;
  for (let i = 0; i < 10; i++) {
    let info: any = data[i];
    let question: string = info.question;
    let answer: string = info.correct_answer;

    let options: string[] = [...info.incorrect_answers, answer];

    let response = await inquirer.prompt({
      name: "ans",
      message: question,
      type: "list",
      choices: options,
    });

    let result = response.ans;
    if (result === answer) {
      score += 1;
      console.log(chalk.greenBright("Correct answer"));
    } else {
      console.log(chalk.redBright("incorrect answer"));
    }
  }
  console.log(chalk.blueBright.bold(`\tYour score is ${score}`));

  let ans = await inquirer.prompt({
    name: "response",
    message: "Want to use again?",
    type: "confirm",
  });
  decision = ans.response;

  if (decision) {
    welcome()
  }
  else{
    console.log(chalk.redBright('Exiting'));
    
  }
}

