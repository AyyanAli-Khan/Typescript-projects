#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function calculation() {
    const answer = await inquirer.prompt([
        {
            message: chalk.rgb(174, 78, 212).bold("Enter first number :"),
            type: "number",
            name: "num1",
        },
        {
            message: chalk.rgb(174, 78, 212).bold("Enter second number :"),
            type: "number",
            name: "num2",
        },
        {
            message: chalk
                .rgb(224, 157, 24)
                .bold("Select any one operator to perform operation"),
            type: "list",
            name: "operator",
            choices: [
                "+ Addition",
                "- Subtraction",
                "* Multiplication",
                "/ Division",
            ]
        },
    ]);
    if (answer.operator === "+ Addition") {
        console.log(`The Addition of these two number is ${chalk
            .rgb(56, 224, 73)
            .bold(answer.num1 + answer.num2)}`);
    }
    else if (answer.operator === "- Subtraction") {
        console.log(`The Subtraction of these two number is ${chalk
            .rgb(56, 224, 73)
            .bold(answer.num1 - answer.num2)}`);
    }
    else if (answer.operator === "* Multiplication") {
        console.log(`The Multiplication of these two number is ${chalk
            .rgb(56, 224, 73)
            .bold(answer.num1 * answer.num2)}`);
    }
    else if (answer.operator === "/ Division") {
        console.log(`The Division of these two number is ${chalk
            .rgb(56, 224, 73)
            .bold(answer.num1 / answer.num2)}`);
    }
    else {
        console.log("Enter valid operator");
    }
}
async function restart() {
    do {
        await calculation();
        var again = await inquirer.prompt([
            {
                message: chalk.rgb(101, 235, 203).bold("Want to use again ? (y/n)"),
                name: "decision",
                type: "string",
            },
        ]);
        if (again.decision == "y" ||
            again.decision == "yes" ||
            again.decision == "Y" ||
            again.decision == "YES") {
            console.log(chalk.blue.bold("Restarting Calculator..."));
        }
        else{
            console.log(chalk.red.bold("Closing Calculator..."));
            
        }
    } while (again.decision == "y" ||
    again.decision == "yes" ||
    again.decision == "Y" ||
        again.decision == "YES");
}
restart();
