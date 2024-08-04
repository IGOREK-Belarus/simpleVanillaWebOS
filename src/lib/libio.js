// Read
let lastKeyPressed;
document.addEventListener("keydown", function(value){
    lastKeyPressed = value.key;
});

export function read(){
    return lastKeyPressed;
}

// Print
export function print(value){
     let headerElement = document.createElement("p");
     headerElement.style.color = "white";
     let headerText = document.createTextNode(value);
     document.body.appendChild(headerElement);
     headerElement.appendChild(headerText);
     return 0;
}