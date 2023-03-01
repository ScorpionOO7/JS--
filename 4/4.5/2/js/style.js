"use script";

/*Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

function Calculator () {

  this.read = function (a,b) {
    this.a = +prompt ("Введите первое значение: ", 0);
    this.b = +prompt ("Введите второе значение", 0);
  },

  this.sum = function () {
    return this.a + this.b;
  },

  this.mul = function () {
    return this.a * this.b;
  }
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );