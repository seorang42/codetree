const fs = require("fs");
let [a, n] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

for (let i = 0; i < n; i++) {
    console.log(a + n);
    a += n;
}