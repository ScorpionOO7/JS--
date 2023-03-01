"use script";

/*Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";*/

function ucFirst(str) {
    str = prompt("Введите имя: ", "");
    if (!str) return str;
    str = str[0].toUpperCase() + str.slice(1);
    alert(str);
}

ucFirst()