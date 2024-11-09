let [a, b, c] = [1, 2, 3];
const sum = a + b + c;
a = b = c = sum;

console.log([a, b, c].join(" "));