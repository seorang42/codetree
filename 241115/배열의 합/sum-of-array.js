const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const array = [];
input.forEach(el => array.push(el.split(" ").map(item => Number(item))));

array.forEach(el => {
    let sum = 0;
    el.forEach(item => sum += item);
    console.log(sum);
});