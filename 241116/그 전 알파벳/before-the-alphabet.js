const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const answer = input.charCodeAt(0) - 1;
if (answer <= "a".charCodeAt(0) - 1) {
    console.log("z");
} else {
    console.log(String.fromCharCode(answer));
}