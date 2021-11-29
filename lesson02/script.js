const num = 266219;

const array = num.toString().split("");
let total = array.reduce((a, b) => {
  return a * b;
});

console.log(total);

const pow = total ** 3;

console.log(pow.toString().substring(0, 2));
