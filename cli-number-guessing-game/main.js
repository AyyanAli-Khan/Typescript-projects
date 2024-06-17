#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function welcome() {
    console.log(chalk.rgb(139, 90, 199).bold(`
           NUMBER GUESSING GAME `));
    console.log(chalk.rgb(139, 90, 199).bold(`
        Developed by : Ayyan Ali Khan
`));
    const howToPlay = chalk.rgb(222, 103, 84).bold("How to play");
    const two_player_game = chalk
        .rgb(222, 103, 84)
        .bold("Start new two player game");
    const soloGame = chalk.rgb(222, 103, 84).bold("Start new solo game");
    const Exit = chalk.rgb(222, 103, 84).bold("Exit");
    const data = await inquirer.prompt([
        {
            name: "mainOptions",
            message: chalk.rgb(252, 83, 10).bold("Main Menu"),
            type: "list",
            choices: [howToPlay, soloGame, two_player_game, Exit],
        },
    ]);
    if (data.mainOptions == howToPlay) {
        howtoplay();
    }
    else if (data.mainOptions == soloGame) {
        solo_game();
    }
    else if (data.mainOptions == Exit) {
        exit();
    }
    else if (data.mainOptions == two_player_game) {
        twoPlayerGame();
    }
}
async function solo_game() {
    console.log(chalk.rgb(41, 51, 242).bold("Lets start a solo game!\n"));
    console.log(chalk.rgb(174, 78, 212).bold("you have 5 chances to guess the number\n"));
    for (let i = 1; i <= 5; i++) {
        const randomNumber = Math.floor(Math.random() * 10 + 1);
        let evenOrodd = randomNumber % 2 === 0 ? "even" : "odd";
        console.log(chalk.green(`  Hint : its an ${evenOrodd} number`));
        const answer = await inquirer.prompt([
            {
                message: chalk.rgb(96, 89, 240).bold("Enter the number between 1-10 :"),
                type: "number",
                name: "guessedNum",
            },
        ]);
        if (answer.guessedNum == randomNumber) {
            console.log(chalk
                .rgb(242, 228, 104)
                .bold("congratulations you guessed the correct number!\n"));
            break;
        }
        else {
            console.log(chalk.redBright("Oops wronge guess try other numbers\n"));
        }
    }
    const again1 = await inquirer.prompt([
        {
            message: chalk.blueBright("want to play again or exit to main menu ?(a/m) :"),
            type: "string",
            name: "choise",
        },
    ]);
    if (again1.choise == "a") {
        console.clear();
        solo_game();
    }
    else if (again1.choise == "m") {
        console.clear();
        welcome();
    }
    else {
        invalidKeyForSoloGame();
    }
}
async function twoPlayerGame() {
    console.log(chalk.rgb(41, 51, 242).bold("Two player number guessing game\n"));
    console.log(chalk
        .rgb(83, 235, 56)
        .bold("Both players have 5 chances to guess the number\n"));
    console.log(chalk
        .rgb(83, 235, 56)
        .bold("Are you ready to test your guessing skills? Let the games begin!\n"));
    const player = await inquirer.prompt([
        {
            message: chalk.rgb(250, 47, 203).bold("Enter player1 name :"),
            name: "player1",
            type: "string",
        },
        {
            message: chalk.rgb(250, 47, 203).bold("Enter player2 name :"),
            name: "player2",
            type: "string",
        },
    ]);
    console.log("\n");
    for (let index = 0; index < 5; index++) {
        const randomNumber = Math.floor(Math.random() * 10 + 1);
        let evenOrodd = randomNumber % 2 === 0 ? "even" : "odd";
        console.log(chalk
            .rgb(114, 166, 148)
            .bold(`\t${player.player1} its your turn try to guess the number`));
        console.log(chalk.green(`  Hint : its an ${evenOrodd} number`));
        const guessedNumber = await inquirer.prompt([
            {
                message: chalk.rgb(96, 89, 240).bold("Enter a number between 1-10 :"),
                name: "player1Num",
                type: "number",
            },
        ]);
        if (randomNumber === guessedNumber.player1Num) {
            console.log(chalk
                .rgb(242, 228, 104)
                .bold(`congratulations ${player.player1} you guessed the correct number!\n`));
            console.log(chalk
                .rgb(230, 125, 96)
                .bold(`The winner of this game is ${chalk
                .rgb(242, 83, 39)
                .bold(player.player1)} `));
            break;
        }
        else {
            console.log(chalk.redBright(`Oops wronge guess ${player.player1} try other numbers\n`));
        }
        console.log(chalk
            .rgb(114, 166, 148)
            .bold(`\t${player.player2} its your turn try to guess the number`));
        console.log(chalk.green(`  Hint : its an ${evenOrodd} number`));
        const guessedNumber2 = await inquirer.prompt([
            {
                message: chalk.rgb(96, 89, 240).bold("Enter a number between 1-10 :"),
                name: "player2Num",
                type: "number",
            },
        ]);
        if (randomNumber === guessedNumber2.player2Num) {
            console.log(chalk
                .rgb(242, 228, 104)
                .bold(`congratulations ${player.player2} you guessed the correct number!\n`));
            console.log(chalk
                .rgb(230, 125, 96)
                .bold(`The winner of this game is ${chalk
                .rgb(242, 83, 39)
                .bold(player.player2)} `));
            break;
        }
        else {
            console.log(chalk.redBright(`Oops wronge guess ${player.player1} try other numbers\n`));
        }
    }
    const again = await inquirer.prompt([
        {
            message: chalk.blueBright("want to play again or exit to main menu ?(a/m) :"),
            type: "string",
            name: "choise",
        },
    ]);
    if (again.choise == "a") {
        console.clear();
        twoPlayerGame();
    }
    else if (again.choise == "m") {
        console.clear();
        welcome();
    }
    else {
        invalidKeyForDuoGame();
    }
}
async function howtoplay() {
    let option1 = chalk.rgb(96, 89, 240).bold("How to play solo game");
    let option2 = chalk.rgb(96, 89, 240).bold("How to play two player game");
    const reply = await inquirer.prompt([
        {
            name: "decision",
            message: "Select anyone",
            type: "list",
            choices: [option1, option2],
        },
    ]);
    if (reply.decision == option2) {
        console.log(chalk.rgb(91, 153, 194).bold(`Title: Two-Player Number Guessing Game

    How to play:
    Welcome to the Two-Player Number Guessing Game! This is a fun and interactive game where two players compete to guess a randomly    generated number. Here's how to play:
        
    1. Enter Player Names*: 
        - Begin by entering the names of the two players. This sets the stage for the friendly competition ahead.
        
    2. Generate Random Number: 
       - Once the players' names are entered, the computer generates a random number. This number is kept secret from the players.
        
    3. Take Turns Guessing: 
          - Players take turns guessing the secret number.
        
    4. Guessing the Number:
       - On each turn, a player submits their guess for the secret number.
       - If the guess is correct, that player wins the game! Congratulations!
       - If the guess is incorrect, the game continues to the next player's turn.
    
    5. Winner Declaration:
       - The game continues until one of the players correctly guesses the secret number.
       - Once a player guesses the correct number, they are declared the winner of the game.

    6. Play Again:
       - After a winner is declared, players have the option to play again. 
       They can continue to enjoy the excitement and challenge of guessing the secret number.
        
    7. Have Fun!:
       - The main objective of the game is to have fun and enjoy the thrill of competition with a friend.
        So, relax, take your time, and may the best guesser win!
        
    The Two-Player Number Guessing Game is a fantastic way to spend time with a friend while exercising your logical thinking and   intuition.
        `));
    }
    else if (reply.decision == option1) {
        console.log(chalk.rgb(91, 153, 194).bold(`Title: Two-Player Number Guessing Game
   
    How to play:
           
    Welcome to the Solo Player Number Guessing Game! This is a fun and interactive game where have to to guess a randomly generated number. Here's how to play:
           

    1. Generate Random Number: 
       - Once the players' names are entered, the computer generates a random number. This number is kept secret from the players.           

    2. Guessing the Number:
       - You have 5 chances to submits your guess for the secret number.
       - If the guess is correct, you wins the game! Congratulations!
       - If the guess is incorrect, the game continues to your next turn.
       
    3. Play Again:
       - After a winner is declared, players have the option to play again. 
       They can continue to enjoy the excitement and challenge of guessing the secret number.
           
    4. Have Fun!:
       - The main objective of the game is to have fun and enjoy.
           
    The Two-Player Number Guessing Game is a fantastic way to spend time with a friend while exercising your logical thinking and intuition.
           `));
    }
    const again = await inquirer.prompt([
        {
            message: chalk.blueBright("Exit to main menu (y/n) :"),
            type: "string",
            name: "decision",
        },
    ]);
    if (again.decision == "y" || "yes" || "YES" || "Y") {
        console.clear();
        welcome();
    }
    else if (again.decision == "n" || "not" || "N" || "NOT") {
        console.clear();
        howtoplay();
    }
    else {
    }
}
function exit() {
    console.log(chalk.redBright.bold("Closing the game..."));
}
async function invalidKeyForDuoGame() {
    console.log(chalk.redBright("Enter valid key"));
    const again = await inquirer.prompt([
        {
            message: chalk.blueBright("want to play again or exit to main menu ?(a/m) :"),
            type: "string",
            name: "choise",
        },
    ]);
    if (again.choise == "a") {
        console.clear();
        twoPlayerGame();
    }
    else if (again.choise == "m") {
        console.clear();
        welcome();
    }
    else {
        console.log(chalk.redBright("Enter valid key"));
        const again = await inquirer.prompt([
            {
                message: chalk.blueBright("want to play again or exit to main menu ?(a/m) :"),
                type: "string",
                name: "choise",
            },
        ]);
        if (again.choise == "a") {
            console.clear();
            twoPlayerGame();
        }
        else if (again.choise == "m") {
            console.clear();
            welcome();
        }
        else {
            invalidKeyForDuoGame();
        }
    }
}
async function invalidKeyForSoloGame() {
    console.log(chalk.redBright("Enter valid key"));
    const again = await inquirer.prompt([
        {
            message: chalk.blueBright("want to play again or exit to main menu ?(a/m) :"),
            type: "string",
            name: "choise",
        },
    ]);
    if (again.choise == "a") {
        console.clear();
        solo_game();
    }
    else if (again.choise == "m") {
        console.clear();
        welcome();
    }
    else {
        console.log(chalk.redBright("Enter valid key"));
        const again = await inquirer.prompt([
            {
                message: chalk.blueBright("want to play again or exit to main menu ?(a/m) :"),
                type: "string",
                name: "choise",
            },
        ]);
        if (again.choise == "a") {
            console.clear();
            solo_game();
        }
        else if (again.choise == "m") {
            console.clear();
            welcome();
        }
        else {
            invalidKeyForSoloGame();
        }
    }
}
await welcome();
