/*
Напиши скрипт подсчета стоимости гравировки украшений. 
Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки.

Вызовы функции для проверки работоспособности твоей реализации.
*/

/*
* ======Start code======
*/

function calculateEngravingPrice(message, pricePerWord) {
  const arr = message.split(" ");
  console.log("Надпись :", arr);
  return arr.length * pricePerWord;
}

console.log(
  "Стоимость гравировки :",
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  "Стоимость гравировки :",
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(
  "Стоимость гравировки :",
  calculateEngravingPrice("Phasellus accumsan cursus velit.", 50)
);

console.log(
  "Стоимость гравировки :",
  calculateEngravingPrice("Vestibulum rutrum mi", 70)
);

console.log(
  "Стоимость гравировки :",
  calculateEngravingPrice(
    "Praesent nec nisl a purus blandit viverra praesent ut ligula non mi varius sagittis.",
    5
  )
);