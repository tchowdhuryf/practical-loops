// Part 1: Refactoring Old Code
const csvData = "42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

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