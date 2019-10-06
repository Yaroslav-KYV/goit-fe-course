/*
Напиши фукцнию findLongestWord(string), 
которая принимает параметром произвольную строку (в строке будут только слова и пробелы) 
и возвращает самое длинное слово в этой строке.

Вызовы функции для проверки работоспособности твоей реализации.
*/


/*
* ===========Цикл for of========
*/

function findLongestWord(string) {
  let words = string.split(" ");
  let longestWord = words[0];

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}


/*
* ===========Цикл for========
*/

// function findLongestWord(string) {
//   let words = string.split(" ");
//   let longestWord = words[0];
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

/*
*  =====Аргументы для параметра функции=====
*/

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));

console.log(findLongestWord("Duis leo Phasellus accumsan cursus velit."));
