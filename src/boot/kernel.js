const kernelName = "Kernel";
const KernelStream = "DEV";
const kernelVersion = "1.0.0";

// Firefox doesn't support, so we gonna duplicate data from os.json
const osName = "superVanillaWebOS"
const osStream = "DEV";
const osVersion = "1.0.0";

function init(){
    console.log("Initialization started!");
    document.body.style.background = "#000000";

    let mainHeaderElement = document.createElement("h1");
    let mainHeaderText = document.createTextNode(kernelName + " " + kernelVersion);
    document.body.appendChild(mainHeaderElement);
    mainHeaderElement.appendChild(mainHeaderText);

    // Styles
    document.getElementsByTagName('H1')[0].style.color = "#FFFFFF";
}


init();