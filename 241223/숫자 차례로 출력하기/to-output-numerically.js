const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

const printNum = (n) => {
    if (n > N) {
        return;
    }
    process.stdout.write(n + " ");
    printNum(n + 1);
}

const printReverseNum = (n) => {
    if (n === 0) {
        return;
    }
    process.stdout.write(n + " ");
    printReverseNum(n - 1);
}

printNum(1);
console.log();
printReverseNum(N);