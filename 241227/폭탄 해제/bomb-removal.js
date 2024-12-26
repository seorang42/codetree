const fs = require("fs");
const [code, color, second] = fs.readFileSync(0).toString().trim().split(" ");

class Info {
    constructor (code, color, second) {
        this.code = code;
        this.color = color;
        this.second = second;
    }
}

const info = new Info(code, color, second);
console.log("code : " + info.code);
console.log("color : " + info.color);
console.log("second : " + info.second);