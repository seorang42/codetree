const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n")[1].split(" ").map(el => Number(el));

const answer = arr.map(el => el % 2 === 0 ? el / 2 : el);
console.log(answer.join(" "));