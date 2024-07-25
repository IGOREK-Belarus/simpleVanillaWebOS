// Default shell
const shellName = "Shell";
const shellVersion = "1.0.0";

import * as libIO from "../lib/libio.js";

// Flags
let dontUseUsersModule = true;
let dontUseDirectory = true;

let currentUser;
let currentDir;

function generateHeaderOutput(){
    return currentUser + "&" + currentDir + " $";
}

export function processCommand(command){
    command = command.trim();
    let indexesOfSpace = [];
    let devidedCommand = [];

    for(let i = 0; i < command.length; i++){
        if (command.charAt(i) == " "){
            indexesOfSpace.push(i);
        }
    }

    for(let i = 0; i <= indexesOfSpace.length; i++){
        if(i == 0){
            devidedCommand.push(command.slice(0, indexesOfSpace[i]));
        }
        else{
            devidedCommand.push(command.slice(indexesOfSpace[i - 1], indexesOfSpace[i]));
        }

    }

    console.log("Result: " + devidedCommand);
}