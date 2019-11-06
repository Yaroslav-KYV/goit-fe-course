import './styles.css';
import fetchCountries from './utils/fetchCountries';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial';
import debounce from 'lodash.debounce'

const input = document.querySelector('.input');
const countryUl = document.querySelector('.country__list');
  input.addEventListener('input', debounce(e => {
    fetchCountries(e.target.value)
      .then(data => {
        if (data.length >= 10) {
          PNotify.defaults.icons = 'material';
          PNotify.alert({
            title: 'To many matches found.',
            text: 'Please enter a more specific query!',
            addClass: 'custom nonblock',
            delay: 2000,
            icon: true,
          });
        } else {
          data.reduce((acc, item) => {
            acc += `<li>${item.name}</li>`;
            return (countryUl.innerHTML = acc);
          }, '');
        }
        if (data.length === 1) {
          data.reduce((acc, el) => {
            acc += `<li><h1 >${el.name}</h1><div class="country__info">
          <div>
          <p><span>Capital: </span>${el.capital}</p>
          <p><span>Population: </span>${el.population}</p>
          <span>Languages: </span>
          <ul class="lang__list">
          </ul>
          </div>
          <div>
          <img src="${el.flag}"alt="">
          </div></div></li>`;

            return (countryUl.innerHTML = acc);
          }, '');

          data[0].languages.reduce((acc, el) => {
            acc += `<li>${el.name}</li>`;
            return (document.querySelector('.lang__list').innerHTML = acc);
          }, '');
        }
      })
      .catch(error => {
        console.log(error)
        PNotify.defaults.icons = 'material';
        PNotify.error({
          title: 'Country not found.',
          text: 'Please enter correct name!',
          addClass: 'custom nonblock',
          delay: 3000,
          icon: true})})
  }, 500));
