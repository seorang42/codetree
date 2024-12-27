const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n");

class Info {
    constructor (name, h, w) {
        this.name = name;
        this.h = h;
        this.w = w;
    }
}

const infoArr = Array(arr.length).fill(new Info());
arr.forEach((el, index) => {
    const [name, h, w] = el.split(" ");
    infoArr[index] = new Info(name, h, w);
})
const nameSortedArr = [...infoArr].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
const hSortedArr = [...infoArr].sort((a, b) => b.h - a.h);

const printInfo = (type, arr) => {
    console.log(type);
    arr.forEach(el => {
        console.log(`${el.name} ${el.h} ${el.w}`);
    })
}

printInfo("name", nameSortedArr);
console.log();
printInfo("height", hSortedArr);