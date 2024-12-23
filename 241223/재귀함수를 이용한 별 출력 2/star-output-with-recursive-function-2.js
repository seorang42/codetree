const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

const printStar = (n) => {
    if (n === 0) {
        return;
    }
    let line = ""
    for (let i = 1; i <= n; i++) {
        line += "* ";
    }
    console.log(line);
    printStar(n - 1);
    console.log(line);
}

printStar(input);