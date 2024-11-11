const fs = require("fs");
const [c, n] = fs.readFileSync(0).toString().trim().split(" ")

const result = [];
for (let i = c === "A" ? 1 : n; c === "A" ? i <= n : i >= 1; i += c === "A" ? 1 : -1) {
    result.push(i);
}

console.log(result.join(" "));