'use strict'

// Поиск чисел, начинающихся с 2 или 4
const arrNumbers = function () {
  let arr = ['449', '17', '787', '224', '689', '48', '262']

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '2' || arr[i][0] === '4') {
      console.log(arr[i]);
    }
  }
}

arrNumbers();

console.log('===========================');

// Вывод делителей простых чисел
const simpleNumbers = function () {
  for (let i = 1; i <= 100; i++) {
    if (i === 1) {
      console.log(i, "Делитель этого числа: 1");
    } else {
      console.log(i, "Делители этого числа: 1 и " + i);
    }
  }
}

simpleNumbers();