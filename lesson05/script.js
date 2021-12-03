let arr = ['449', '17', '787', '224', '689', '48', '262']

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith(2) || arr[i].startsWith(4)) {
    console.log(arr[i]);
  }
}

console.log('===========================');

for (let i = 1; i <= 100; i++) {

  if (i === 1) {
    console.log(i, "Делители этого числа: 1");
  } else {
    console.log(i, "Делители этого числа: 1 и " + i);
  }
}