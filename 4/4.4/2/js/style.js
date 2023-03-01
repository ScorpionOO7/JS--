"use script";

/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

let calculator = {

  read: function () {
    calculator.a = prompt ("Введите первое значение: ", 0);
    calculator.b = prompt ("Введите второе значение: ", 0); 
  },

  sum: function () {
    return +this.a + +this.b;
  },

  mul: function () {
    return this.a * this.b;
  },

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

