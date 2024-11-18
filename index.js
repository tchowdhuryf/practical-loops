//Part 1 Fizz Buzz
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz");
    } 
}

console.log(""); //spacing between the parts

//Part 2 Prime Time
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
num = 101;
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
};

let nextNum = num + 1;

while (!isPrime(nextNum)) {
    nextNum++;
}

console.log(nextNum);

console.log(""); //spacing between the parts

//Part 3 Feeling Loopy
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
//
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let currentCell = 1; 
let currentChar = 0; 


while (currentChar < csvData.length) {
    const char = csvData[currentChar];

    if (char === ',') {
        currentCell++;

    } else if (char === '\n' || (char === '\r' && csvData[currentChar + 1] === '\n')) {
        console.log(cell1, cell2, cell3, cell4);

        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
        currentCell = 1;

        if (char === '\r') {
          currentChar++;
      }

    } else {
        switch (currentCell) {
            case 1:
                cell1 += char;
                break;
            case 2:
                cell2 += char;
                break;
            case 3:
                cell3 += char;
                break;
            case 4:
                cell4 += char;
                break;
        }
    }

    currentChar++;
}

if (cell1 || cell2 || cell3 || cell4) {
    console.log(cell1, cell2, cell3, cell4);
}

console.log(""); //spacing between the parts

//testing another set of data
const csvData1 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

cell1 = '';
cell2 = '';
cell3 = '';
cell4 = '';
currentCell = 1; 
currentChar = 0; 


while (currentChar < csvData1.length) {
    const char = csvData1[currentChar];

    if (char === ',') {
        currentCell++;

    } else if (char === '\n' || (char === '\r' && csvData[currentChar + 1] === '\n')) {
        console.log(cell1, cell2, cell3, cell4);

        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
        currentCell = 1;

        if (char === '\r') {
          currentChar++;
      }

    } else {
        switch (currentCell) {
            case 1:
                cell1 += char;
                break;
            case 2:
                cell2 += char;
                break;
            case 3:
                cell3 += char;
                break;
            case 4:
                cell4 += char;
                break;
        }
    }

    currentChar++;
}

if (cell1 || cell2 || cell3 || cell4) {
    console.log(cell1, cell2, cell3, cell4);
}


