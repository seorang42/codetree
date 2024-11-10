const fs = require("fs");
let [a, bcde] = fs.readFileSync(0).toString().trim().split("\n");
a = Number(a);
[b, c, d, e] = bcde.split(" ").map(el => Number(el));

const array = [a > b, a > c, a > d, a > e];
array.forEach(el => console.log(el ? 1 : 0));