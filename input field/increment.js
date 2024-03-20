function increment(value) {
    const numberInput = document.getElementById("number-container");
    const currentValue = parseInt(numberInput.value);
    numberInput.value = currentValue + value;
}
