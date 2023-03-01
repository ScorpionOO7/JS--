"use script";

//В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(date) {

  let dayWeek = date.getDay();

  if (dayWeek == 0) {
    dayWeek = 7;
  }
  
  return dayWeek;

}

let date = new Date(2012, 0, 3);  // 3 января 2012 года

alert( getLocalDay(date) );       // вторник, нужно показать 2