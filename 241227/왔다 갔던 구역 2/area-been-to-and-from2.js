const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" "));
const areaArr = [];
let [current, highest, offset] = [0, 0, 0]; 
arr.forEach(el => {
    if (el[1] === "R") {
        areaArr.push([current, current + Number(el[0])]);
        current += Number(el[0]);
        if (current > highest) {
            highest = current;
        }
    } else {
        areaArr.push([current, current - Number(el[0])]);
        current -= Number(el[0]);
        if (current < offset) {
            offset = current;
        }
    }
});

const line = Array(highest - offset + 1).fill(0);
areaArr.forEach(el => {
    const [start, end] = el.sort((a, b) => a - b).map(el => el - offset);
    for (let i = start; i < end; i++) {
        line[i]++;
    }
});

console.log(line.filter(el => el >= 2).length);