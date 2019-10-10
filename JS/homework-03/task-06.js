// Напиши функцию calculateTotalPrice(arr, productName), 
// которая получает массив объектов и имя продукта (значение свойства name). 
// Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

/*
* =====Start code=====
*/
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

function calculateTotalPrice(arr, productName) {
  let multiply = [];

  for (const prop of arr) {
    if (prop.name === productName) {
      multiply = prop.price * prop.quantity;
    }
  }
  return multiply;
}

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800

console.log(calculateTotalPrice(products, "Сканер")); // 8100

console.log(calculateTotalPrice(products, "Захват")); // 2400


