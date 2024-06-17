#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

do {
    console.clear()
console.log(chalk.magentaBright(`
            CURRENCY CONVERTER

        Developed by Ayyan Ali Khan    
`))


const currency: any = {
USD: 1,
GBP: 0.79,
EUR: 0.93,
AED: 3.67,
PKR: 278.5,
IND: 83.55,
};

const answer = await inquirer.prompt([
{
name: "from",
message: chalk.magenta("Convert from"),
type: "list",
choices: ["USD", "GBP", "EUR", "AED", "PKR", "IND"],
},
{
name: "to",
message: chalk.cyanBright("Convert to"),
type: "list",
choices: ["USD", "GBP", "EUR", "AED", "PKR", "IND"],
},
{
name: "amount",
message: chalk.greenBright("Enter amount :"),
type: Number,
},
]);

let convert_from = answer.from;
let convert_to = answer.to;

let toCurrency = currency[answer.to];

let fromCurrency = currency[answer.from];
let amount = answer.amount;

let baseAmount = amount / fromCurrency;

let convertedAmount = baseAmount * toCurrency;

let finalAmount = convertedAmount.toFixed(2);

const finalResult = {
"From Currency": convert_from,
"To Currency": convert_to,
Amount: amount,
"Converted Amount": finalAmount,
};
console.table(finalResult);

let decision = await inquirer.prompt({
name: 'decision',
message:"want to use again ?",
type: 'confirm',
default: true,
})

var condition = decision.decision;

} while(condition == true)