function convertToFahrenheit() {
    //input
    const celsiusInput = document.getElementById("celsius").value;

    // Validate input
    if (celsiusInput === "") {
        document.getElementById("result").textContent = "Please enter a value.";
        return;
    }

    const celsius = parseFloat(celsiusInput);

    if (isNaN(celsius)) {
        document.getElementById("result").textContent = "Invalid number.";
        return;
    }

    
    const fahrenheit = (celsius * 9/5) + 32;

    // Display result with 2 decimal places
    document.getElementById("result").textContent = 
        `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;

}

document.addEventListener("DOMContentLoaded", () => {
    const savedData = JSON.parse(localStorage.getItem("result")) || [];
    savedData.forEach(row => addRowToTable(row.celsius));

});
function addDataToTable(celsius) {
// Create a new row at the end of the table
const newRow = tableBody.insertRow();

// Create new cells for name and age
const celsiusCell = newRow.insertCell(1);


// Assign the values to the cells
celsiusCell.textContent = result;

}