var display = document.getElementById("display")


function appendToDisplay(input){
    display.value += input;
   
}
function clearDisplay(){
    display.value = ""
}

function calculate(){
    try{
    display.value = eval(display.value)
}
catch(error){
    display.value = "Error"
}
}

function cutone(){
   display.value = display.value.substring(0,display.value.length-1)
}
