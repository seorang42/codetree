const fs = require("fs");
const [arr1, arr2] = fs.readFileSync(0).toString().trim().split("\n\n");
const [array1, array2] = [arr1.split("\n"), arr2.split("\n")];
const [firstArr, secondArr] = [[], []];
array1.forEach(el => firstArr.push(el.split(" ").map(el => Number(el))));
array2.forEach(el => secondArr.push(el.split(" ").map(el => Number(el))));

for (let i = 0; i < 3; i++) {
    const line = [];
    for (let j = 0; j < 3; j++) {
        line.push(firstArr[i][j] * secondArr[i][j]);
    }
    console.log(line.join(" "));
}