const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1);

class Info {
    constructor (name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

const infoArr = Array(n).fill(new Info());
arr.forEach((el, index) => {
    const [name, height, weight] = el.split(" ");
    infoArr[index] = new Info(name, height, weight);
})
const sortedArr = infoArr.sort((a, b) => a.height - b.height);
sortedArr.forEach(el => {
    console.log(`${el.name} ${el.height} ${el.weight}`);
})