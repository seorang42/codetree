const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let count = 1;
const printSquare = (n) => {
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j < n; j++) {
            line += count + " ";
            count = count + 1 < 10 ? count + 1 : 1;
        }
        console.log(line);
    }
}

printSquare(n);