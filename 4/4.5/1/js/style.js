"use script";

/*Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода.*/

let x = {};

function A() {
  return x;
};

function B() {
  return x;
};

let a = new A();
let b = new B();

alert(a == b); // true