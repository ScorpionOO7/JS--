"use script";

/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.*/

function camelize(str) {
  let arr = str.split("-");

  /*for (i = 1; i < arr.length; i++){
    let x = arr[i];
    arr [i] = x.at(0).toUpperCase() + x.slice(1);
  };*/

  arr = arr.map((item, index) => index == 0? item: item.at(0).toUpperCase() + item.slice(1) )

  str = arr.join("");

  alert(str);
};

camelize("background-color");// == 'backgroundColor';
camelize("list-style-image");// == 'listStyleImage';
camelize("-webkit-transition");// == 'WebkitTransition';