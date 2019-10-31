import dishes from '../js/menu.json';
import template from '../templates/dishesMarkup.hbs';

const dishesMenu = template(dishes);
document.querySelector('.js-menu').insertAdjacentHTML('beforeend', dishesMenu);

// ===============================Не готово==============================

// const dishesUl = document.querySelector(".js-menu")

// function renderDishes(arrDishes, ref) {
//   const markup = arrDishes.reduce((acc, el) => {
//     const li = `<li class="menu__item">
//     <div class="card">
//       <img
//         src=${el.image}
//         alt="${el.name}"
//         class="card__image"
//       />
//       <div class="card__content">
//         <h2 class="card__name">${name}</h2>
//         <p class="card__price">
//           <i class="material-icons">
//             monetization_on
//           </i>
//           ${el.price} кредитов
//         </p>

//         <p class="card__descr">
//           ${el.description}
//         </p>
//         <ul class="tag-list">
//         </ul>
//     </div>`;

//     return (acc += li);
//   }, "");

//   ref.insertAdjacentHTML("afterbegin", markup);
// }
// renderDishes(dishes, dishesUl);

// const tagList = document.querySelector(".tag-list");
// console.log(tagList);

// const ingredients = dishes.reduce((allIngredients, dish) => {
//   allIngredients.push(dish.ingredients);

//   return allIngredients;
// }, []);

// console.log(ingredients);

// ingredients.forEach(element => {
//   element.forEach(ingredient => {
//     return ingredient;
//   })
// });
