'use strict';

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

let timeString = document.querySelector('.time-string');
let timeNumber = document.querySelector('.time-number');

let hour, minute, second;

function declensionHours (el) {
  if (el == 1 || el == 21) {
      hour = " час ";
      return el;
  } else if (el >= 2 && el <= 4 || el >= 22) {
      hour = " часа ";
      return el;
  } else if (el >= 5 && el <= 20) {
      hour = " часов ";
      return el;
  }
}

function declensionMinutes (el) {
  if (el % 10 == 1 && el !== 11) {
      minute = " минута ";
      return el;
  } else if (el % 10 >= 2 && el % 10 <= 4) {
      minute = " минуты ";
      return el;
  } else if (el >= 11 && el % 10 <= 20) {
      minute = " минут ";
      return el;
  } else {
      minute = " минут ";
      return el;
  }
}

function declensionSeconds(el) {
  if (el % 10 == 1 && el !== 11) {
      second = " секунда ";
      return el;
  } else if (el % 10 >= 2 && el % 10 <= 4 ) {
      second = " секунды ";
      return el;
  } else if (el >= 11 && el % 10 <= 20) {
      second = " секунд ";
      return el;
  }  else {
      second = " секунд ";
      return el;
  }
}

const twoNumbersFormat = (n) => Math.floor(n / 10) === 0 ? '0' + n : n;


const outputVar = () => {
  let data = new Date();
  timeString.textContent =`
  Сегодня ${days[data.getDay()]}, ${data.getDate()} ${months[data.getMonth()]} ${data.getFullYear()} года,
  ${declensionHours(data.getHours())} ${hour} ${declensionMinutes(data.getMinutes())} ${minute} ${declensionSeconds(data.getSeconds())} ${second}`;

  timeNumber.textContent = `
  ${twoNumbersFormat(data.getDate())}.${twoNumbersFormat(data.getMonth())}.${twoNumbersFormat(data.getFullYear())} -
  ${twoNumbersFormat(data.getHours())}:${twoNumbersFormat(data.getMinutes())}:${twoNumbersFormat(data.getSeconds())}`;
}

window.setInterval(outputVar, 1000);