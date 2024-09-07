const kernelName = "Kernel";
const KernelStream = "DEV";
const kernelVersion = "0.1.0";

// Firefox doesn't support, so we gonna duplicate data from os.json
const osName = "simpleVanillaWebOS";
const osStream = "DEV";
const osVersion = "0.2.0";

let state = 0;

function init(){
    console.log("Initialization started!");
    document.body.style.background = "#000000";

    let mainHeaderElement = document.createElement("h1");
    let mainHeaderText = document.createTextNode(kernelName + " " + kernelVersion);
    document.body.appendChild(mainHeaderElement);
    mainHeaderElement.appendChild(mainHeaderText);


    let initHeaderElement = document.createElement("h3");
    let initHeaderText = document.createTextNode("Initialization...");
    document.body.appendChild(initHeaderElement);
    initHeaderElement.appendChild(initHeaderText);

    if(!(osName == undefined && osVersion == undefined)){
        let osHeaderElement = document.createElement("h3");
        let osHeaderText = document.createTextNode("Loading " + osName + " " + osVersion);
        document.body.appendChild(osHeaderElement);
        osHeaderElement.appendChild(osHeaderText);
    }
    else{
        panic("OS data is not found!");
        console.error("OS data is not found!");
    }

    // Styles
    document.getElementsByTagName('h1')[0].style.color = "#FFFFFF";
    document.getElementsByTagName('h3')[0].style.color = "#FFFFFF";
    document.getElementsByTagName('h3')[1].style.color = "#FFFFFF";
}

function panic(errorText){
    // TODO: Improve it
    document.body.style.background = "#FF0000";
    console.error("Kernel panic. Kernel name: " + kernelName + ". Kernel version: " + kernelVersion + ". Error: " + errorText);
}

function clearUp(){
    for(let i = 0; i = 3; i++){
        document.getElementsByTagName('h3')[0].remove();
    }  
}
function startLoader(){
    // Continues loading using Loader app
    if(osData.loader.length > 1){
        // TODO
    }
    else{
        libTermUI.drawInteractiveBlocks();
        let interactiveElements = libTermUI.getInteractiveObjectsLink();
        state = 1;
    }
}

init();
import * as osData from "./osdata.js";
import * as libTermUI from "../lib/libtrmui.js";
startLoader();