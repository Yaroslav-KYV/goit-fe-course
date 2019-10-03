// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// =====Start Code======

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;

// const userInput = prompt("Enter password");

// if (userInput === null) {
//   message = "Aborted by user!";
// } else if (userInput === ADMIN_PASSWORD) {
//   message = "Welcome!";
// } else {
//   message = "Access denied! Incorect password!";
// }

// alert(message);