"use script";

/*Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
Можно использовать решение из предыдущей задачи.*/

function random(min, max) {
    min = +prompt("Введите минимальное значение", "");
    max = +prompt("Введите максимальное значение", "") + 1;
    let randomNumber = 0;
    while (min > randomNumber || randomNumber > max) {
      randomNumber = Math.floor( Math.random() * 10);
    }
    alert(randomNumber);
  }
  
  random();
  