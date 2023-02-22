let column_1 = [];
let column_2 = [];
let column_3 = [];
let column_4 = [];
let sum_1 = 0;
let sum_2 = 0;
let sum_3 = 0;
let sum_4 = 0;


for (let i=0; i<30; i++) {
 column_1.push(Math.floor(Math.random()*10)+1)
 column_2.push(Math.floor(Math.random()*10)+1)
 column_3.push(Math.floor(Math.random()*100)+1)
 column_4.push(Math.floor(Math.random()*100)+1)
}

for (let i=0; i<30; i++) {
 sum_1 = sum_1 + column_1[i];
 sum_2 = sum_2 + column_2[i];
 sum_3 = sum_3 + column_3[i];
 sum_4 = sum_4 + column_4[i];
}

let sums = [sum_1, sum_2, sum_3, sum_4];
let total_score = sum_1 + sum_2 + sum_3 + sum_4;
const results = {
    column_1,
    column_2,
    column_3,
    column_4,
    sums,
    total_score,
}
console.log(results);