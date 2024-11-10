const fs = require("fs");
const char = fs.readFileSync(0).toString().trim();

console.log(char === "S" ? "Superior" : char === "A" ? "Excellent" : char === "B" ? "Good" : char === "C" ? "Usually" : char === "D" ? "Effort" : "Failure");