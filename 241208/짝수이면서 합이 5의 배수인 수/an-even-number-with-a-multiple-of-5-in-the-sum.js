const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

const checkNum = (num) => {
    const [ten, one] = [Math.floor(num / 10), num % 10];
    if (num % 2 === 0 && (ten + one) % 5 === 0) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(checkNum(input));