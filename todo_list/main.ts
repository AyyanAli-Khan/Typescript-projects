#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string[] = [];
async function welcome() {
  console.log(chalk.cyanBright.bold(`\n\t\tTodolist App\n\tDeveloped by Ayyan Ali Khan`));
  setTimeout(() => {
    main()
  }, 3000);
}
 welcome()
async function main() {
  console.clear();
  let ans = await inquirer.prompt({
    name: "res",
    message: chalk.blueBright("Select action"),
    type: "list",
    choices: ["add new todo", "update todo", "view todos", "delete todo","Exit"],
  });

  let res = ans.res;

  if (res == "add new todo") {
    addTodo();
  }
  if (res == "update todo") {
    updateTodo();
  }
  if (res == "view todos") {
    viewTodo();
  }
  if (res == "delete todo") {
    delTodo();
  }
  if(res == "Exit"){
    console.log(chalk.red("Exiting todo app"));
      }
}
async function addTodo() {
  let addItem = await inquirer.prompt({
    name: "item",
    message: chalk.magentaBright("Enter the todo you want to add :"),
  });

  let addTodo = addItem.item;

  todoList.push(addTodo);
  setTimeout(() => {
    console.log(chalk.greenBright("Added in list successfully"));
    setTimeout(() => {
      main();
    }, 2000);
  }, 2000);
}
function viewTodo() {
  console.log(chalk.greenBright("\n\bTodos : "));

  let num = 1
  for (let i = 0; i < todoList.length; i++) {
    if (todoList.length == 0) {
      console.log("There is no todo in list");
    } else {
      const item = todoList[i];
      console.log(`${num}. ${item}`);
      num += 1
    }
  }
  setTimeout(() => {
    console.log(chalk.greenBright("Redirecting to main menu"));
    setTimeout(() => {
      main();
    }, 2000);
  }, 2000);
}
async function delTodo() {
  let delItem = await inquirer.prompt({
    name: "item",
    message: chalk.magentaBright("Select the item you wanr to delete"),
    type: "list",
    choices: todoList.map((item) => item),
  });
  let deleteItem = delItem.item;
  todoList = todoList.filter((items) => {
    return items !== deleteItem;
  });

  setTimeout(() => {
    console.log(chalk.greenBright("Deleted successfully"));
    setTimeout(() => {
      main();
    }, 2000);
  }, 2000);
}

async function updateTodo() {
  let updateItem = await inquirer.prompt({
    name: "item",
    message: chalk.magentaBright("Select the todo you want to update"),
    type: "list",
    choices: todoList.map((item) => item),
  });
  let addItem = await inquirer.prompt({
    name: "item",
    message: chalk.magentaBright("Enter the todo you want to update :"),
  });

  let updatedItem = updateItem.item;
  todoList = todoList.filter((items) => {
    return items !== updatedItem;
  });
  todoList.push(addItem.item);
  setTimeout(() => {
    console.log(chalk.greenBright("Updated successfully"));
    setTimeout(() => {
      main();
    }, 2000);
  }, 2000);
}



