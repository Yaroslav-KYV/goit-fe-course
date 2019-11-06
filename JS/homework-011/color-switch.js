/*
Есть массив цветов в hex-формате и кнопки Start и Stop.
Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение 
из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
warning Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, 
чтобы пока изменение темы запушено, кнопка Start была не активна.
Для генерации случайного числа (индекс элемента массива цветов), используй функцию

*/

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action = "start"]');
const stopBtn = document.querySelector('button[data-action = "stop"]');

const randomColorChange = {
  startChangeColor() {
    startBtn.setAttribute("disabled", "true");
    this.setRandomColor = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(min, max)];
      // siteBody.style.backgroundColor =
      // colors[parseInt(Math.random() * colors.length)]; // Тоже самое без функции randomIntegerFromInterval
    }, 1000);
  },

  stopChangeColor() {
    clearInterval(this.setRandomColor);
    startBtn.removeAttribute("disabled");
  }
};

startBtn.addEventListener(
  "click",
  randomColorChange.startChangeColor.bind(randomColorChange)
);
stopBtn.addEventListener(
  "click",
  randomColorChange.stopChangeColor.bind(randomColorChange)
);
