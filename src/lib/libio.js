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
     // TODO: Make it actually work.
     return value;
}