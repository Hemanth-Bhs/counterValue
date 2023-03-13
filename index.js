let counterElement = document.getElementById("counterValue");

function onDecre() {
    let previousValue = counterElement.textContent;
    let updateValue = parseInt(previousValue) - 2;
    if (updateValue > 0) {
        counterElement.style.color = "Blue";
    } else if (updateValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
    counterElement.textContent = updateValue;
}

function onIncre() {
    let previousValue = counterElement.textContent;
    let updateValue = parseInt(previousValue) + 2;
    if (updateValue > 0) {
        counterElement.style.color = "Blue";
    } else if (updateValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
    counterElement.textContent = updateValue;

}

function onReset() {
    let counterValue = "0";
    counterElement.textContent = counterValue;
    counterElement.style.color = "black";

}