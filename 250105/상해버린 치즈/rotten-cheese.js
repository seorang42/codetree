const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M, D, S] = input[0].split(" ").map(el => Number(el));
const eatArr = input.slice(1, D + 1).map(el => el.split(" ").map(el => Number(el)));
const sickArr = input.slice(D + 1).map(el => el.split(" ").map(el => Number(el)));
const sickPersonArr = sickArr.map(el => el[0]);

let answer = 0;
for (let i = 1; i <= M; i++) {
    const ateCheezePerson = [];
    for (let j = 0; j < D; j++) {
        const [person, czNum, time] = eatArr[j];
        if (czNum === i) {
            for (let k = 0; k < S; k++) {
                const [sickPerson, sickTime] = sickArr[k];
                if (sickPerson === person && time < sickTime && !ateCheezePerson.includes(person)) {
                    ateCheezePerson.push(person);
                }
            }
        }
    }
    const isRotten = JSON.stringify(sickPersonArr.sort((a, b) => a - b)) === JSON.stringify(ateCheezePerson.sort((a, b) => a - b));
    if (isRotten) {
        const sickResult = [];
        for (let j = 0; j < D; j++) {
            const [person, czNum, time] = eatArr[j];
            if (czNum === i && !sickResult.includes(person)) {
                sickResult.push(person);
            }
        }
        const count = sickResult.length;
        if (count > answer) answer = count;
    }
}

console.log(answer);