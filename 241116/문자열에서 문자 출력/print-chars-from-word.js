const fs = require("fs");
const answer = fs.readFileSync(0).toString().trim();
for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
}