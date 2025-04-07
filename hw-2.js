// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
let iphoneFirst = 2007;
alert(`дата выпуска первого Iphone ${iphoneFirst} год!`);

// Задание 3
const javaScriptCreator = 'Brendan Eich';
alert(`Создатель языка JavaScript ${javaScriptCreator}`);

// Задание 4
let c = 10;
let d = 2;
alert(c + d);
alert(c - d);
alert(c * d);
alert(c / d);
// Задание 5
let result = 2 ** 5;
alert(result);

// Задание 6
a = 9;
let b = 2;
alert(a % b);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = Number(prompt('Сколько вам лет?'));
alert(age);

// Задание 9
let user = {
  name: String('Sergey'),
  age: Number(32),
  isAdmin: Boolean(true),
};
alert(user);

// Задание 10
let name = String(prompt('Как твое имя ?'));
alert(`Привет, ${name}`);

// Дополнительное задание
let number = prompt('Загадай любое число :');
let double = number * 2;
alert('Результат умночения на 2 = ' + double);
let sum = double + 10;
alert('Результат увличеня на 10 = ' + sum);
let division = sum / 2;
alert('Результат деления на 2 = ' + division);
let subtraction = division - number;
alert('Результат вычитания = ' + subtraction);
alert('Ответ = 5');

