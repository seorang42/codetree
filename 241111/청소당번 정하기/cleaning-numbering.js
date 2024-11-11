const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const classCount = Math.floor(n / 2);
const hallCount = Math.floor(n / 3);
const wcCount = Math.floor(n / 12);

console.log([classCount, hallCount, wcCount].join(" "));