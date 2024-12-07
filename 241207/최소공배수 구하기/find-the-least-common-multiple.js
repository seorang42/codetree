const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const gcd = (x, y) => {
    while (y !== 0) {
        [x, y] = [y, x % y];
    }
    return x;
}

const lcm = (x, y) => x * y / gcd(x, y);

console.log(lcm(a, b));