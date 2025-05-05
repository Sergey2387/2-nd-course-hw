// Задание 1
// Преобразовать строку 'js' в верхний регистр.

let str = 'js';
let strUpper = str.toUpperCase();
console.log(strUpper);

// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна
// вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.

const filterString = (array, string) => {
  return array.filter(item => item.toLowerCase().startsWith(string));
};
const array = ['hello', 'World', 'JavaScript', 'string'];
console.log(filterString(array, 'w'));

// Задание 3
// Округлить число 32.58884:
// До меньшего целого.
// До большего целого.
// До ближайшего целого.

let num = 32.58884;
let num1 = Math.floor(num);
console.log(num1);
let num2 = Math.ceil(num);
console.log(num2);
let num3 = Math.round(num);
console.log(num3);

// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

const numArray = [52, 53, 49, 77, 21, 32];
let min = Math.min(...numArray);
console.log(min);
let max = Math.max(...numArray);
console.log(max);

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

const randomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};
console.log(randomNumber());

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.

const randomArray = (num) => {
  const lengthArr = Math.floor(num / 2);
  const arr = [];
  for (let i = 0; i < lengthArr; i++) {
    const randomNum = Math.floor(Math.random() * num);
    arr.push(randomNum);
  }
  return arr;
};
console.log(randomArray(14));


// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

const randomNumberRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomNumberRange(5, 5));


// Задание 8
//

const date = new Date();
console.log(date.toLocaleDateString());

// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

const currentDate = new Date();
const futureDate = new Date(currentDate.setDate(currentDate.getDate() + 73));
console.log(futureDate.toLocaleDateString());

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

const formatDate = (date) => {
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = daysOfWeek[date.getDay()];

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}\nВремя : ${hours}:${minutes}:${seconds}`;
}
console.log(formatDate(new Date()));