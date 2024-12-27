const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const getBinNum = (n) => {
    if (n < 2) {
        return n;
    }
    return getBinNum(parseInt(n / 2)) + String(n % 2)
}

console.log(getBinNum(n));