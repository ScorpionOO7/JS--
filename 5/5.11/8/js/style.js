"use script";

/*Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );*/

function formatDate(date) {
  
  let eventTime = new Date() - (date).getTime();

  if (eventTime < 1000) {

    return "прямо сейчас"

  } else if (eventTime < 60 * 1000) {

    return Math.floor((eventTime) / 1000) + " сек. назад";

  } else if (eventTime < 60 * 60 * 1000) {

    return Math.floor((eventTime) / 1000 / 60) + " мин. назад";

  } else {

    let formDate = date;

    formDate = [
      "0" + formDate.getDate(),
      "0" + (formDate.getMonth() + 1),
      "" + formDate.getFullYear(),
      "0" + formDate.getHours(),
      "0" + formDate.getMinutes(),
    ].map(component => component.slice(-2));

    return formDate.slice(0,3).join(".") + " " + formDate.slice(3).join(":");

  }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );