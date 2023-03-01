"use script";

/*На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.*/

function getMaxSubSum(arr) {
  let maxSumA = 0;
  let maxSumB = 0;
  let maxItem = 0;
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] == +arr[i+1] - 1) {
      newArray.push(arr[i]);
      maxSumA = maxSumA + +arr[i];
    } else if (+arr[i] == +arr[i-1] +1) {
      newArray.length = 0;
      if (maxSumA + +arr[i] > maxSumB) {
        maxSumB = maxSumA + +arr[i];
        maxSumA = 0;
      } else {
        maxSumA = 0;
      }
    }
  };

  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] > maxItem) {
      maxItem = +arr[i];
    }
  };  

  if (maxSumB > maxItem) {
    alert(maxSumB);
  } else {
    alert(maxItem);
  }

};

getMaxSubSum([-1, 2, 3, -9]); //5
getMaxSubSum([2, -1, 2, 3, -9]); //5 НЕ СОГЛАСЕН С УСЛОВИЕМ, ЧТО ДОЛЖНО БЫТЬ 6, ТАК КАК ТУТ ПОЛУЧАЕТСЯ МАКСИМАЛЬНЫЙ НЕПРЕРЫВНЫЙ (КОГДА ЦИФРЫ ИДУТ ПОСЛЕДОВАТЕЛЬНО [-2, -1 , 0 , 1 , 2 , 3]) ПОДМАССИВ [2, 3]
getMaxSubSum([-1, 2, 3, -9, 11]); //11
getMaxSubSum([-2, -1, 1, 2]); //3 
getMaxSubSum([100, -9, 2, -3, 5]); //100 
getMaxSubSum([1, 2, 3]); //6 
getMaxSubSum([-1, -2, -3]); //0
getMaxSubSum([]); //0
getMaxSubSum([-1]); //0
getMaxSubSum([-1, -2]); //0
getMaxSubSum([2, -8, 5, -1, 2, -3, 2]); //5 НЕ СОГЛАСЕН С УСЛОВИЕМ, ЧТО ДОЛЖНО БЫТЬ 6, ТАК КАК ТУТ ПОЛУЧАЕТСЯ МАКСИМАЛЬНЫЙ НЕПРЕРЫВНЫЙ (КОГДА ЦИФРЫ ИДУТ ПОСЛЕДОВАТЕЛЬНО [-2, -1 , 0 , 1 , 2 , 3]) ПОДМАССИВ [5]