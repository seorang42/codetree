const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const answer = input.charCodeAt(0) + 1;
if (answer >= "z".charCodeAt(0) + 1) {
    console.log("a");
} else {
    console.log(String.fromCharCode(answer));
}