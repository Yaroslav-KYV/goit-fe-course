/*
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
Функция считает общую сумму запрплаты работников и возращает ее. 
Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

Вызовы функции для проверки работоспособности твоей реализации.
*/

/*
* ====Start Code====
*/

function countTotalSalary(employees) {
  const employeesSalary = Object.keys(employees);
  let sum = 0;
  for (let employeeSalary of employeesSalary) {
    sum += employees[employeeSalary];
  }
  return sum;
}

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400
