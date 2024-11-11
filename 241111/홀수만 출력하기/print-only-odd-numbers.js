const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(el => Number(el));

const n = input[0];
const ints = [];
input.forEach((el, index) => index !== 0 && ints.push(el));

ints.forEach(el => el % 2 !== 0 && el % 3 === 0 && console.log(el));