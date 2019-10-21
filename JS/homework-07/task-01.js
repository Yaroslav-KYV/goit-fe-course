/*
===================================Task-01=================================

Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2)
и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4

const body = document.body;
console.log("body", body);
*/

const ulCategories = document.getElementById("categories");
const liItem = document.querySelectorAll(".item");
const h2 = document.querySelectorAll("h2");
console.log(`В списке ${liItem.length} категории`);
// console.log(h2);

const find = arr => {
  arr.forEach(el => {
    console.log(`Категория: ${el.querySelector("h2").textContent}`);
    console.log(`Количество елементов: ${el.querySelectorAll("li").length}`);
  });
};
find(liItem);

/*
==================================Task-02===================================================

Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
после чего вставит все li за одну операцию в список ul.ingredients.
Для создания DOM-узлов используй document.createElement().
*/

const ul = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();
// console.log("fragment", fragment);

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const addLi = arr => {
  arr.forEach(el => {
    const li = document.createElement("li");
    li.textContent = el;
    fragment.appendChild(li);
  });
};
addLi(ingredients);
ul.appendChild(fragment);

/*
=============================Task-03======================================

Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.
Используй массив объектов images для создания тегов img вложенных в li.
Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
*/

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const galleryList = document.getElementById("gallery");
let str = "";
const gallery = arr => {
  arr.forEach(el => {
    str += `<li><img class = "gallery-img" src= ${el.url} alt=${el.alt}/></li>`;
  });
  galleryList.insertAdjacentHTML("afterbegin", str);
};
gallery(images);

/*
===================================Task-04=============================================

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейсаСчетчик состоит из спана и кнопок,
которые должны увеличивать и уменьшать значение счетчика на 1.
*/

const counterValue = document.getElementById("value");
const incrementBtn = document.querySelector(
  'button[data-action = "increment"]'
);
const decrementBtn = document.querySelector(
  'button[data-action = "decrement"]'
);

const Counter = function({ initValue = 0, step = 1 }) {
  this.value = initValue;
  this.counterStep = step;
};
Counter.prototype.increment = function() {
  this.value += this.counterStep;
};
Counter.prototype.decrement = function() {
  this.value -= this.counterStep;
};

const counter = new Counter({
  initValue: 100,
  step: 10
});

incrementBtn.addEventListener("click", () => {
  counter.increment();
  counterValue.textContent = counter.value;
});

decrementBtn.addEventListener("click", () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});

/*
===========================Task-05=================================

Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
подставляет его текущее значение в span#name-output.
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/

const inputName = document.getElementById("name-input");

const output = document.getElementById("name-output");

if (inputName.value === "") {
  output.textContent = "newcomer";
}

inputName.addEventListener("input", e => {
  output.textContent = e.target.value;
  
});

/*
=========================Task-06===============================

Напиши скрипт, который бы при потере фокуса на инпуте,
проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/

const validationInput = document.getElementById("validation-input");

const inputLength = validationInput.getAttribute("data-length");

validationInput.addEventListener("blur", event => {
  if (event.currentTarget.value.length == inputLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});

/*
======================Task-07=========================

Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и
изменяет инлайн-стиль span#text обновляя свойство font-size.
В результате при перетаскивании ползунка будет меняться размер текста.
*/

const fontSizeCtrl = document.getElementById("font-size-control");
const textSize = document.getElementById("text");

fontSizeCtrl.addEventListener("input", e => {
  textSize.style.fontSize = e.currentTarget.value + "px";
});
