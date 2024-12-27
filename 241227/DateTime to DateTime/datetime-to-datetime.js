const fs = require("fs");
const [d, h, m] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const start = new Date(2011, 11, 11, 11, 11).getTime();
const end = new Date(2011, 11, d, h, m).getTime();

console.log(parseInt((end - start) / 1000 / 60));