const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

const fibo = (num) => {
    if (num === 1 || num === 2) {
        return 1;
    }
    return fibo(num - 1) + fibo(num - 2);
}

console.log(fibo(input));