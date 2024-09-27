// Function to append a value to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to delete the last character
function deleteLast() {
    var currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    var currentDisplay = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(currentDisplay);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
