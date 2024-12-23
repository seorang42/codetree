const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

const printNum = (n) => {
    if (n === 0) {
        return;
    }
    process.stdout.write(n + " ");
    printNum(n - 1);
    process.stdout.write(n + " ");
}

printNum(input);