// Lib Terminal UI - Special UI library for displaying needed stuff for terminal (In Kernel mode)

let box;
let input;
let button;

export function clear(){
    console.log("Clearning screen!");
}
export function drawInteractiveBlocks(){
    drawInputBar();
    drawButton();
    injectStyles();
}

function injectStyles(){
    // box.style.position = "absolute";
    box.style.bottom = "0%";
    box.style.width = "100%";
    box.style.display = "flex";
    box.style.justifyContent = "center";
}

function drawInputBar(){
    // Should be moved from the function
    let localBox = document.createElement("div");
    localBox.setAttribute("class", "interactiveTerminalBox");
    box = localBox;
    document.body.appendChild(box);
    let localInput = document.createElement("input");
    box.appendChild(localInput);
    localInput.style.width = "90%";
    input = localInput;
}

function drawButton(){
    let localButton = document.createElement("button");
    let buttonText = document.createTextNode(">");
    localButton.appendChild(buttonText);
    box.appendChild(localButton);
    localButton.style.width = "5%";
    button = localButton;
}

export function getInteractiveObjectsLink(){
    let array = [input, button];
    return array;
}