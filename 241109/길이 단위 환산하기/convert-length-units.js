const fs = require("fs");
const ft = Number(fs.readFileSync(0).toString());

const FEET = 30.48;

console.log((ft * FEET).toFixed(1));