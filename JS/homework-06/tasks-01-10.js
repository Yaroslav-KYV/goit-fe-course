import users from "./users.js";
/*
 * ===== Task 01=====
 */

/*
Получить массив имен всех пользователей (поле name).
*/
// const getUserNames = users => {
//   return users.map(el => el.name);
// };

// console.log(getUserNames(users));

/*
 * ===== Task 02=====
 */

/*
Получить массив объектов пользователей по цвету глаз (поле eyeColor).
*/

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(el => el.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

/*
 * ===== Task 03=====
 */

/*
Получить массив имен пользователей по полу (поле gender).
*/

// const getUsersWithGender = (users, gender) => {
//   return users.filter(el => el.gender === gender).map(el => el.name);
// };

// console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

/*
 * ===== Task 04=====
 */

/*
Получить массив только неактивных пользователей (поле isActive).
*/

// const getInactiveUsers = users => {
//   return users.filter(el => el.isActive === false);
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/*
 * ===== Task 05=====
 */

/*
Получить пользователя (не массив) по email (поле email, он уникальный).
*/

// const getUserWithEmail = (users, email) => {
//   return users.find(el => el.email === email);
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

/*
 * =====Task 06=====
 */

/*
Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
*/

// const getUsersWithAge = (users, min, max) => {
//   return users.filter(el => el.age > min && el.age < max);
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/*
 * =====Task 07=====
 */

/*
Получить общую сумму баланса (поле balance) всех пользователей.
*/

// const calculateTotalBalance = users => {
//   return users.reduce((totalBalance, el) => totalBalance + el.balance, 0);
// };

// console.log(calculateTotalBalance(users)); // 20916

// const numbers = [1, 2, 3, 4, 5];

// const summ = numbers.reduce((acc, value) => acc + value);

// console.log(summ); // 15

/*
 * =====Task 08=====
 */

/*
Массив имен всех пользователей у которых есть друг с указанным именем.
*/

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(el => el.friends.includes(friendName)).map(el => el.name);
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

/*
 ============================Task 09===============================

Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
get 
*/

// const getNamesSortedByFriendsCount = users => {
//   return users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(el => el.name);
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

/*
  =========================Task 10===========================

Получить массив всех умений всех пользователей (поле skills), 
при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

*/

// const getSortedUniqueSkills = users => {
//   const skills = [];
//   users.forEach(el => {
//     skills.push(...el.skills);
//   });
//   const unique = [];
//   skills
//     .forEach(el => {
//       !unique.includes(el) && unique.push(el);
//     })
//     unique.sort();
//   return unique;
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum',
// // 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
