"use script";

/*Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?*/

//["a", "b", function() {alert( this );}] выведет на экран этот массив
