const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

if (a > 0) {
    let result = "";
    for (let i = 0; i < b; i++) {
        result += a;
    }
    console.log(result);
} else {
    console.log(0);
}