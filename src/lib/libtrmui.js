// Lib Terminal UI - Special UI library for displaying needed stuff for terminal (In Kernel mode)

let box;

export function clear(){
    console.log("Clearning screen!");
}
export function drawInteractiveBlocks(){
    drawInputBar();
    drawButton();
    injectStyles();
}

function injectStyles(){
    box.style.position = "absolute";
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
    let input = document.createElement("input");
    box.appendChild(input);
    input.style.width = "90%";
}

function drawButton(){
    let button = document.createElement("button");
    let buttonText = document.createTextNode(">");
    button.appendChild(buttonText);
    box.appendChild(button);
    button.style.width = "5%";
}