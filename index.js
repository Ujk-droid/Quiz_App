#! /usr/bin/env node
import inquirer from "inquirer";
import chalk, { chalkStderr } from "chalk";
console.log(chalk.yellow("====================================================="));
console.log(chalk.blue("******************Quiz_App_Cli***********************"));
console.log(chalk.yellow("====================================================="));
let marks = 0;
let userInput = await inquirer.prompt([
    {
        type: "list",
        name: "question1",
        message: "1.which is the capital city of Pakistan?",
        choices: ["karachi", "lahore", "islamabad", "kpk"],
    },
    {
        type: "list",
        name: "question2",
        message: "2.how many surah mubarika in quran",
        choices: [10, 114, 44, 99]
    },
    {
        type: "list",
        name: "question3",
        message: "3.how many time muslims offers pray",
        choices: [1, 2, 5, 10]
    },
    {
        type: "list",
        name: "question4",
        message: "4.how many times  Ahmed come in quran",
        choices: [1, 2, 3, 10]
    },
    {
        type: "list",
        name: "question5",
        message: "5.which is the biggest cits of Pakistan",
        choices: ["karachi", "lahore", "islamabad", "dgkhan"],
    }
]);
const { question1, question2, question3, question4, question5 } = userInput;
//this is called destructing
let correctOptions = ["islamabad", 114, 5, 1, "karachi"];
if (question1 === "islamabad")
    marks += 10;
if (question2 === 114)
    marks += 10;
if (question3 === 5)
    marks += 10;
if (question4 === 1)
    marks += 10;
if (question5 === "karachi")
    marks += 10;
console.log(marks);
function myAnswer() {
    console.log(chalkStderr.bgBlue(`\n correct options:`, correctOptions));
    if (marks == 50) {
        console.log(chalkStderr.bgBlue(`\ncongratulations! you got full ${marks} marks`));
    }
    else if (marks > 0) {
        console.log(chalkStderr.bgBlue(`\n you got ${marks} marks!`));
    }
    else {
        console.log(chalkStderr.bgBlue(`\n Unfortunately! you got ${marks} marks`));
    }
}
myAnswer();
