var result = Math.floor(Math.random() * 10) + 1; 
var chance = 3;

let form = document.querySelector("#input")

console.log(result);

function check(inputNumber) {
    if (!chance) {
        alert("Sorry, you are out of turn"); 
        return
    }

    if ((inputNumber > 10)||(inputNumber < 1)) {
        alert("Invalid. Retry"); 
        return;
    }
    
    if (inputNumber == result) {
        alert("Congratulation");
    } else {
        --chance;
        if (!chance) {alert(`You failed. The result is ${result}`); return}
        alert(`Wrong. Try again`);
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    let inputNumber = form.number.value;
    check(inputNumber);
    form.number.value = "";
}