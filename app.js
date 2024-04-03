console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i < 101; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ", i)
    }
    else if (i % 3 == 0) {
        console.log("FIZZ", i)
    }
    else if (i % 5 == 0) {
        console.log("BUZZ", i)
    }
    else {
        //easier to read
        console.log(i)
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let x = 0;
do {
    x++;
    if (x % 2 != 0) {
        console.log(x);
    }
} while (x < 100);

let y = 1;
do {
    y++;
    if (y % 3 == 0 && y % 5 == 0) {
        console.log("FIZZBUZZ", y)
    }
    else if (y % 3 == 0) {
        console.log("FIZZ", y)
    }
    else if (y % 5 == 0) {
        console.log("BUZZ", y)
    }
    else {
        //easier to read
        console.log(y)
    }
} while (y < 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i < n; i++) {
    if (i == value) {
        console.log("found value")
        break;
    }
    else if (i == n) {
        console.log("did not find value")
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let i = start; i < end; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log("FIZZBUZZ", i)
    }
    else if (i % fizzDivisor == 0) {
        console.log("FIZZ", i)
    }
    else if (i % buzzDivisor == 0) {
        console.log("BUZZ", i)
    }
    else {
        //easier to read
        console.log(i)
    }
}

console.log("fizzDivisor", fizzDivisor);
console.log("buzzDivisor", buzzDivisor);