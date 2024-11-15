const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const array = [];
input.forEach(el => array.push(el.split(" ")));

array.forEach(line => {
    const answer = [];
    line.forEach(el => answer.push(el.toUpperCase()));
    console.log(answer.join(" "));
});