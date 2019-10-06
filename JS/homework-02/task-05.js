/*
Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку. 
Функция проверяет ее на содержание слов spam и sale. 
Если нашли зарещенное слово то функция возвращает true, 
если запрещенных слов нет функция возвращает false. 
Слова в строке могут быть в произвольном регистре.

Вызовы функции для проверки работоспособности твоей реализации.
*/

/*
* ====== Start code ======
*/

function checkFor(str) {
  return str.includes("sale") || str.toLowerCase().includes("spam");
}

console.log(checkFor("Latest technology news"));

console.log(checkFor("JavaScript weekly newsletter"));

console.log(checkFor("Get best sale offers now!"));

console.log(checkFor("[SPAM] How to earn fast money?"));