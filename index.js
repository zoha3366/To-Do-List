#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what you want to add in your todo list?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "do you want to add more?",
            default: "false",
        },
    ]);
    todos.push(addTask.firstQuestion);
    condition = addTask.secondQuestion;
    console.log(todos);
}
