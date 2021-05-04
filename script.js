const input = document.querySelector('.numberInput');
const paragraph = document.querySelector('p');

function squared(number) {
    return number * number;
}

function cubed(number) {
    return number*number*number;
}

function factorial(number) {
    if (number < 0) return undefined;
    if (number == 0) return 1;
    let x = number -1;
    while(x > 1) {
        number *= x;
        x--;
    }
    return number;
}

input.onchange = function() {
    const number = input.value;
    if (isNaN(number)) {
        paragraph.textContent = "Please enter a number!"
    } else {
        paragraph.textContent = `${number} squared is ${squared(number)}.
        ${number} cubed is ${cubed(number)}.
        ${number} factorial is ${factorial(number)}.`;
    }
}