function plus() {
    let a = Number(document.getElementById(`number1`).value);
    let b = Number(document.getElementById(`number2`).value);
    let result = a + b;
    document.getElementById('result').innerHTML = result;
}

function minus() {
    let a = Number(document.getElementById(`number1`).value);
    let b = Number(document.getElementById(`number2`).value);
    let result = a - b;
    document.getElementById('result').innerHTML = result;
}

function multiplication() {
    let a = Number(document.getElementById(`number1`).value);
    let b = Number(document.getElementById(`number2`).value);
    let result = a * b;
    document.getElementById('result').innerHTML = result;
}

function division() {
    let a = Number(document.getElementById(`number1`).value);
    let b = Number(document.getElementById(`number2`).value);
    if (b == 0) {
        let result = 'На ноль делить нельзя :З';
        document.getElementById('result').innerHTML = result;
    } else {
        let result = a / b;
        document.getElementById('result').innerHTML = result;
    }
}