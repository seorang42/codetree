const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1);

class Info {
    constructor (name, h, w) {
        this.name = name;
        this.h = h;
        this.w = w;
    }
}

const infoArr = Array(n).fill(new Info());
arr.forEach((el, index) => {
    const [name, h, w] = el.split(" ");
    infoArr[index] = new Info(name, Number(h), Number(w));
})
const sortedArr = infoArr.sort((a, b) => {
    if (a.h !== b.h) {
        return a.h - b.h;
    } else {
        return b.w - a.w;
    }
})
sortedArr.forEach(el => {
    console.log(`${el.name} ${el.h} ${el.w}`);
})