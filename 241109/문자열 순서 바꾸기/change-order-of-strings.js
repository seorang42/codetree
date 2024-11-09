const fs = require("fs");
const [s, t] = fs.readFileSync(0).toString().trim().split("\n");

[t, s].forEach(el => console.log(el));