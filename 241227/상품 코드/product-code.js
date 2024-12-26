const fs = require("fs");
const [name, code] = fs.readFileSync(0).toString().trim().split(" ");

class Info {
    constructor (name = "codetree", code = "50") {
        this.name = name;
        this.code = code;
    }
}

const printInfo = (info) => {
    return `product ${info.code} is ${info.name}`;
}

console.log(printInfo(new Info()));
console.log(printInfo(new Info(name, code)));