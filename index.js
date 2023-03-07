let first = [{ id: 1 }];
let second = [4, 5, 6];

first[0].id = 10;

combiend = first.concat(second);
console.log(combiend);

// const slice = combiend.slice(2, 4);
const slice = combiend.slice(2);
console.log(slice);
