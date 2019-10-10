/*
Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа. 
Возвращает массив значений определенного поля prop из каждого объекта в массиве.

Вызовы функции для проверки работоспособности твоей реализации.
*/

/*
* =====Start Code=====
*/

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

/*
* =====For=====
*/

function getAllPropValues(arr, prop) {
  const output = [];
  for (let i = 0; i < arr.length; i += 1) {
    if(prop in arr[i]) {
      output.push(arr[i][prop]);
    }
  }
  return output;
}

/*
* =====For of=====
*/

// function getAllPropValues(arr, prop) {
//   const output = [];
//   for (const key of arr) {
//     if(prop in key) {
//       output.push(key[prop]);
//     }
//   }
//   return output;
// }


console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []