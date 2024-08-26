function convert() {
    const decimalInput = document.getElementById("decimalInput").value;

    if (decimalInput === '') {
        alert("Please enter a decimal number!");
        return;
    }

    const decimalNumber = parseInt(decimalInput);

    // Convert to Binary, Hexadecimal, and Octal
    const binary = decimalNumber.toString(2);
    const hexadecimal = decimalNumber.toString(16).toUpperCase();
    const octal = decimalNumber.toString(8);

    // Display the results
    document.getElementById("binaryResult").innerText = binary;
    document.getElementById("hexadecimalResult").innerText = hexadecimal;
    document.getElementById("octalResult").innerText = octal;
}
