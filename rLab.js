// Part 1: Refactoring Old Code
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let cell1 = '', cell2 = '', cell3 = '', cell4 = '';
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

// Part 2: Expanding Functionality
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns.
// This should be calculated dynamically based on the first row of data.
//
// After you have implemented the above:
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
//
// ***note: csvData, currentCell and currentChar are declared above***
//
let rows = [];
let currentRow = [];
let numColumns = 0;
currentCell = 1; 
currentChar = 0; 

while (currentChar < csvData.length) {
    const char = csvData[currentChar];
    
    if (char === ',') {
        currentCell++;

    } else if (char === '\n' || (char === '\r' && csvData[currentChar + 1] === '\n')) {
        rows.push(currentRow);
        currentRow = [];
        currentCell = 1;

        if (char === '\r') {
            currentChar++;
        }

    } else {
        if (currentRow.length === 0 && currentCell === 1 && char !== ',') {
            let firstRow = csvData.split('\n')[0].split(',');
            numColumns = firstRow.length;            
        }

        currentRow[currentCell - 1] = (currentRow[currentCell - 1] || '') + char;
    }

    currentChar++;
}

if (currentRow.length > 0) {
    rows.push(currentRow);
}

console.log(rows);

console.log(""); //spacing between the parts

// Part 3: Transforming Data
// Implement the following:
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value's column.
//  * Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

// resetting all variables
rows = [];
currentRow = [];
numColumns = 0;
currentCell = 1;  
currentChar = 0;  

while (currentChar < csvData.length) {
    const char = csvData[currentChar];
    
    if (char === ',') {
        currentCell++;
    } else if (char === '\n' || (char === '\r' && csvData[currentChar + 1] === '\n')) {
        rows.push(currentRow);
        currentRow = [];
        currentCell = 1;

        if (char === '\r') {
            currentChar++;
        }
    } else {
        if (currentRow.length === 0 && currentCell === 1 && char !== ',') {
            let firstRow = csvData.split('\n')[0].split(',');
            numColumns = firstRow.length;
        }
        currentRow[currentCell - 1] = (currentRow[currentCell - 1] || '') + char;
    }

    currentChar++;
}

if (currentRow.length > 0) {
    rows.push(currentRow);
}

// changing the data to objects with the first row as keys for objects
let header = rows[0];
let dataRows = rows.slice(1);

let newFormat = dataRows.map(row => {
    let obj = {};
    row.forEach((value, index) => {
        obj[header[index].toLowerCase()] = value;
    });
    return obj;
});

console.log(newFormat); // not printing the last row properly because of the terminal width

console.log(""); // spacing between the parts

// debugging for the last row printing differently
console.log( { id: 'Debug', name: 'Bruce', occupation: 'Doc', age: '41' }) 
console.log( { id: 'Debug', name: 'Bruce', occupation: "Doctor's Assistant", age: '41' }) // conclusion - terminal width size makes the output look different

// Part 4: Sorting and Manipulating Data
// Remove the last element from the sorted array.
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
// Finally, use the values of each object within the array and the array's length property to calculate the average age of the group. This calculation should be accomplished using a loop.

// Removing the last element from the sorted array
console.log("")
newFormat.pop();
console.log(newFormat);

// inserting { id: "48", name: "Barry", occupation: "Runner", age: "25" } at index 1
console.log("")
newFormat.splice(1, 0, {id: "48", name: "Barry", occupation: "Runner", age: "25"});
console.log(newFormat);
console.log("")


// adding { id: "7", name: "Bilbo", occupation: "None", age: "111" } at last index
newFormat.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(newFormat);
console.log("")

// calculating the average age of the group
let sum = 0;
let avg = 0;
countObj = 0;

for (let i = 0; i < newFormat.length; i++) {
    sum += parseInt(newFormat[i].age); // converting obj data from string -> number
    countObj++;
}

avg = sum / countObj; // calculating the average age

console.log(`The average age of the group is: ${avg}`);