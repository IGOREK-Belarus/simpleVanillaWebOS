// Default shell
const shellName = "Shell";
const shellVersion = "0.1.1";

import * as libIO from "../lib/libio.js";

// Now comes some dirty code - Built-in database
import * as echo from "./echo.js";

// Flags
let dontUseUsersModule = true;
let dontUseFileSystem = true;
let dontPrintHeader = true;

let currentUser;
let currentDir;

function generateHeaderOutput(){
    return currentUser + "&" + currentDir + " $ ";
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

    devidedCommand[0] = devidedCommand[0].toLowerCase();


    // Check for header flag
    if(dontPrintHeader == false){
        libIO.print(generateHeaderOutput() + command);
    }

    
    // Checking commands
    switch(devidedCommand[0]){
        case "echo":
            let tempString = command.slice(indexesOfSpace[0], command.length);
            echo.run(tempString);
            break;
        default:
            libIO.print("Command not found");
            break;
    }
}