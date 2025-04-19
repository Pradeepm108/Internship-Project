let displayElement = document.getElementById("display");

function appendValue(value) {
    if(displayElement.innerText.length<12){
        displayElement.innerText += value;
    } else {
        alert("Maximum Limit Reached!");
    }
   
}

function clearDisplay() {
    displayElement.innerText = "";
}

function deleteLastCharacter() {
    let displayElement = document.getElementById("display");
    displayElement.innerText = displayElement.innerText.slice(0, -1);
}

function calculatePercentage(){
    let displayElement = document.getElementById("display");
    let currentVlaue = parseFloat(displayElement.innerText);

    if(!isNaN(currentVlaue)){
        displayElement.innerText=currentVlaue/100;
    } else{
        displayElement.innerText="Error";
    } 
}








// function calculatePercentage() {
//     // Get values from inputs
//     const number = parseFloat(document.getElementById("number").value);
//     const percentage = parseFloat(document.getElementById("percentage").value);

//     // Validate inputs
//     if (isNaN(number) || isNaN(percentage)) {
//         document.getElementById("result").textContent = "Please enter valid numbers!";
//         return;
//     }

//     // Perform calculation
//     const result = (number * percentage) / 100;

//     // Display the result
//     document.getElementById("result").textContent = 
//         `${number} * ${percentage}% = ${result}`;
// }

function calculate() {
    try {
        displayElement.innerText = eval(displayElement.innerText);
    } catch (error) {
        displayElement.innerText = "Error";
    }
    
}
function changeButtonColor(bt1) {
    
}