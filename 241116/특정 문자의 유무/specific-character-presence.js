const fs = require("fs");
const str = fs.readFileSync(0).toString().trim();

const [ee, ab] = [str.includes("ee") ? "Yes" : "No", str.includes("ab") ? "Yes" : "No"];
console.log(ee, ab);