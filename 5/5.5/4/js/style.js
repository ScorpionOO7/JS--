"use script";

/*let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10*/

let arr = [5, 2, 1, -10, 8];

function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}

arr.sort(compare);
arr.reverse();

alert( arr ); // 8, 5, 2, 1, -10