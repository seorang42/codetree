const array = Array(5).fill(1).map(el => Array(5).fill(1));

for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
        array[i][j] = array[i - 1][j] + array[i][j - 1];
    }
}

array.forEach(el => console.log(el.join(" ")));