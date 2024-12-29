//  Q5


let number = parseInt(prompt("Please enter a positive integer:"));


    let sum = 0;

    for (let i = 0; i <= number; i++) {
        sum += i;
    }

    console.log(`Sum from 0 to ${number}: ${sum}`);