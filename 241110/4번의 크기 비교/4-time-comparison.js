const fs = require("fs");
let [a, bcde] = fs.readFileSync(0).toString().trim().split("\n");
a = Number(a);
bcde = bcde.map(el => Number(el));

const array = [a > b, a > c, a > d, a > e];
array.forEach(el => console.log(el ? 1 : 0));