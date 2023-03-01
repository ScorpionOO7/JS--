"use script";

/*Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

function sumInput() {
  let sumUserValue = 0;
  let arrUserInput = [];
  let userValue = prompt("Введите значение: ",);

  while (userValue) {
    if (userValue == null || userValue == "") {
      break;
    }
    arrUserInput.push(userValue);
    userValue = prompt("Введите значение: ",);
  };

  for (let i = 0; i < arrUserInput.length; i++) {
    sumUserValue = sumUserValue + +arrUserInput[i];
  } 

  alert(sumUserValue);
};

sumInput();