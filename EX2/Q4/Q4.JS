//Q4
let num;

while (true) {
    num = prompt("Please enter a number between 0 and 100:");

    if (num >= 0 && num <= 100) {
        break;
    } else {
        alert("again Please enter a number between 0 and 100.");
    }
}


alert(num);