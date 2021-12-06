'use strict'

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

function task() {
  for (let i = 0; i < week.length; i++) {

    if (i === 5 || i === 6) {
      console.log(`%c ${week[i]}`, 'font-style: italic;');
    } else {
      console.log(week[i]);
    }
  }
  console.log(`%c ${new Date}`, 'font-weight: bold');
}

task();