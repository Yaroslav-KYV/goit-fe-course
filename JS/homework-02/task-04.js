/*
Напиши функцию formatString(string) принимающую строку в параметр string.

Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
Если длина больше 40 символов, то функция обрезает строку до 40-ка символов 
и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
Вызовы функции для проверки работоспособности твоей реализации.
*/


/* 
* =======Start code======
*/


function formatString(string) {

let SumWords = string.slice(0, 40);

if (string.length > SumWords.length) {
  SumWords += "...";
}

return SumWords;

}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));