/*
Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. 
Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, 
во время технического обслуживания и т. д.

Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. 
Количество дней может состоять из более чем двух цифр.

Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
*/

class CountdownTimer {
  constructor(timerId, newDate) {
    this.selector = timerId;
    this.targetDate = new Date(newDate);
  }

  timer = function() {
    setInterval(() => {
      const difference = this.targetDate - Date.now();

      const timers = document.querySelector(`${this.selector}`);
      const days = timers.querySelector('.value[data-value="days"]');
      const hours = timers.querySelector('.value[data-value="hours"]');
      const mins = timers.querySelector('.value[data-value="mins"]');
      const secs = timers.querySelector('.value[data-value="secs"]');

      const daysCount = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hoursCount = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesCount = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsCount = Math.floor((difference % (1000 * 60)) / 1000);

      days.textContent = daysCount;
      hours.textContent = hoursCount;
      mins.textContent = minutesCount;
      secs.textContent = secondsCount;

      /*
       ===============================Авторазметка для счетчиков :)====================================
      */
      //   timers.innerHTML = `<div class="field">
      //   <span class="value" data-value="days">${daysCount}</span>
      //   <span class="label">Days</span>
      // </div>

      // <div class="field">
      //   <span class="value" data-value="hours">${hoursCount}</span>
      //   <span class="label">Hours</span>
      // </div>

      // <div class="field">
      //   <span class="value" data-value="mins">${minutesCount}</span>
      //   <span class="label">Minutes</span>
      // </div>

      // <div class="field">
      //   <span class="value" data-value="secs">${secondsCount}</span>
      //   <span class="label">Seconds</span>
      // </div>`

      /*
       ========================================Конец разметки==================================
      */
    }, 1000);
  };
}

const instanceTimer1 = new CountdownTimer("#timer-1", "Dec 31, 2019");
instanceTimer1.timer();

const instanceTimer2 = new CountdownTimer("#timer-2", "Nov 12, 2019");
instanceTimer2.timer();

// const instanceTimer3 = new CountdownTimer("#timer-3", "Aug 1, 2020");
// instanceTimer3.timer();
