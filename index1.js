function findOppositeNumber(n, inputNumber) {
    let k = (n/2);
    let result;

    if (inputNumber < k) {result = inputNumber + k}
    else {result = inputNumber - k}

    alert(result);
}

let a = parseInt(prompt("Nhap n"),10);
let b = parseInt(prompt("Nhap inputNumber"),10);
findOppositeNumber(a, b);