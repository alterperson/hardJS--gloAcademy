"use strict";

let message = "       Огроменный текстище, как такой смог сюда вместиться, непонятно      ";

const checkString = function (text) {
  let typeOf = typeof text;
  if (typeOf != "string") {
    console.log("Переданный текст не строкового типа");
  } else if (text.length + 1 > 30) {
    text = text.trim().slice(0, 30) + "...";
    console.log(text);
  }
};

checkString(message);
