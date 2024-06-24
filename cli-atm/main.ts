import inquirer from "inquirer";
import chalk from "chalk";

let initialAmount: number = 10000;
let setPassword: number;
let pinList: number[] = [];

async function welcome() {
  console.log(
    chalk.rgb(
      21,
      17,
      245
    )(`
                  ATM

        Developed by Ayyan Ali Khan    
  `)
  );
}

async function main() {
  let create_account = chalk.greenBright("Create Account");
  let have_account = chalk.greenBright("Already have account");
  const answer = await inquirer.prompt([
    {
      name: "main",
      type: "list",
      message: chalk.blue(
        `Select anyone (If you're new here, please take a moment to create an account.)`
      ),
      choices: [create_account, have_account],
    },
  ]);

  if (answer.main === create_account) {
    createAccount();
  } else if (answer.main === have_account) {
    haveAccount();
  }
}

async function createAccount() {
  const answer = await inquirer.prompt([
    {
      name: "name",
      type: "string",
      message: chalk.rgb(215, 38, 235)("Enter your name :"),
    },
    {
      name: "password",
      type: "number",
      message: chalk.rgb(215, 38, 235)("Write password you want to set :"),
    },
  ]);
  pinList.push(answer.password);

  console.log(chalk.rgb(19, 195, 214)("your initial balance 10000$"));
  setPassword = answer.password;
  console.log(chalk.rgb(19, 195, 214)("Processing..."));

  setTimeout(() => {
    console.log(chalk.blueBright("Your account is created successfully! \n"));
    console.log(chalk.blueBright("Redirecting to main menu "));
  }, 2000);

  setTimeout(() => {
    console.clear();
    main();
  }, 5000);
}

async function haveAccount() {
  const pin = await inquirer.prompt({
    name: "pin",
    message: chalk.rgb(215, 38, 235)("Enter you pin :"),
    type: "number",
  });
  if (setPassword === pin.pin || pinList.includes(pin.pin)) {
    correctPin();
  } else {
    console.log("Enter correct pin");
  }
}

async function correctPin() {
  let withdraw = chalk.rgb(55, 153, 67)("withdraw");
  let fastCash = chalk.rgb(55, 153, 67)("fastcash");

  const answer = await inquirer.prompt([
    {
      name: "option",
      message: chalk.rgb(215, 38, 235)("Which action you want to perform"),
      type: "list",
      choices: [withdraw, fastCash],
    },
  ]);

  if (answer.option === withdraw) {
    const withdraw = await inquirer.prompt({
      name: "amount",
      message: chalk.rgb(215, 38, 235)("Write ammount you want to withdrawl: "),
      type: "input",
    });

    let amount = withdraw.amount;
    // console.log(amount, typeof amount)
    let res = !amount.includes("-") ? true : false;
    // console.log(res);

    amount = Number(amount);
    // console.log(amount, typeof amount)
    let remainingAmount: number = initialAmount - amount;
    if (res) {
      if (withdraw.amount > initialAmount) {
        console.log("insufficient balance");
      } else if (withdraw.amount <= initialAmount) {
        console.log(chalk.green(`
                     current balance : ${initialAmount}$  
                     withdrawl amount : ${withdraw.amount}$   
                     remaining balance : ${remainingAmount}$
            `));
      }
    } else {
      console.log(chalk.red("Write valid ammount"));
      setTimeout(() => {
        console.clear()
        correctPin();
      }, 2000);
      return
    }
  }
 else if (answer.option === fastCash) {
    const fastCash = await inquirer.prompt([
      {
        name: "option",
        message: chalk.rgb(215, 38, 235)("Select Amount"),
        type: "list",
        choices: [1000, 2000, 3000, 4000, 5000],
      },
    ]);

    // console.log(initialAmount);
    // console.log(fastCash.option);

    switch (fastCash.option) {
      case 1000:
        console.log(chalk.green(`
        current balance : ${initialAmount}$  
        withdrawl amount : ${fastCash.option}$
        remaining balance : ${initialAmount - fastCash.option}$
        `));
          initialAmount -= fastCash.option;
        break;
      case 2000:
        console.log(chalk.green(`
        current balance : ${initialAmount}$  
        withdrawl amount : ${fastCash.option}$
        remaining balance: ${initialAmount - fastCash.option}$
        `));
          initialAmount -= fastCash.option;
        break;
      case 3000:
        console.log(chalk.green(`
        current balance : ${initialAmount}$  
        withdrawl amount : ${fastCash.option}$
        remaining balance: ${initialAmount - fastCash.option}$
        `));
          initialAmount -= fastCash.option;
        break;
      case 4000:
        console.log(chalk.green(`
        current balance : ${initialAmount}$  
        withdrawl amount : ${fastCash.option}$
        remaining balance: ${initialAmount - fastCash.option}$
        `));
          initialAmount -= fastCash.option;
        initialAmount -= fastCash.option;
        break;
      case 5000:
        console.log(chalk.green(`
      current balance : ${initialAmount}$  
      withdrawl amount : ${fastCash.option}$
      remaining balance: ${initialAmount - fastCash.option}$
      `));
        initialAmount -= fastCash.option;
        break;

      default:
        console.log("Error");

        break;
    }
  } else {
    console.log(chalk.red("Select Valid Option or insufficient balance"));
    console.clear();
    main();
  }

  const reuse = await inquirer.prompt({
    name: "decision",
    message: chalk.rgb(215, 38, 235)("want to use again"),
    type: "confirm",
    default: "true",
  });
  if (reuse.decision == true) {
    console.clear();
    main();
  }
  else if (reuse.decision == false){
    console.log(chalk.redBright('\nClosing ATM...'));
    setTimeout(()=>{
      
    },2000)
  }
}
welcome();
main();
