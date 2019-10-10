/*
Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

Вызовы функции для проверки работоспособности твоей реализации.
*/

/*
 * ====== Start Code=====
 */

function countProps(obj) {
  const keys = Object.keys(obj);
  console.log(obj);
  return keys.length;
}

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
