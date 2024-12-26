const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1);

class Info {
    constructor (name, address, location) {
        this.name = name;
        this.address = address;
        this.location = location;
    }
}

const infoArr = Array(n).fill(new Info());
arr.forEach((el, index) => {
    const [name, address, location] = el.split(" ");
    infoArr[index] = new Info(name, address, location);
})
const target = infoArr.sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0)[0];
console.log("name " + target.name);
console.log("addr " + target.address);
console.log("city " + target.location);