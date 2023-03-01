"use script";

/*Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

Например:*/

function unique(arr) {
  /*let set = new Set(arr);
  arr.length = 0;
  for (let value of set) {
    arr.push(value);
  }
  return arr;*/
  return Array.from( new Set( arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O

//P.S. Здесь мы используем строки, но значения могут быть любого типа.

//P.P.S. Используйте Set для хранения уникальных значений.