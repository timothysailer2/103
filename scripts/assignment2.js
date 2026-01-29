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