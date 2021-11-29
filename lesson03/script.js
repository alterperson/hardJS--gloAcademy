//================1===========

const lang = prompt("Русский(ru) или Английский(en)");

//===============a============

if (lang === "en") {
  console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} else if (lang === "ru") {
  console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
} else {
  console.log("Язык не выбран");
}

//===============b============

switch (lang) {
  case "en":
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
    break;
  case "ru":
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
    break;
  default:
    console.log("Язык не выбран");
    break;
}

//===============c============

const chooseLang = () => chooseLang.week[lang] || chooseLang.week["default"];
chooseLang.week = {
  ru: "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье",
  en: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
  default: "Язык не выбран",
};
console.log(chooseLang());

//================2===========

namePerson = "Юля";

namePerson === "Артем" ? console.log("директор") : namePerson === "Александр" ? console.log("преподаватель") : console.log("студент");
