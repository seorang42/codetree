const fs = require("fs");
const [height, weight] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const b = Math.floor((10000 * weight) / height ** 2);

console.log(b);
if (b >= 25) {
    console.log("Obesity");
}