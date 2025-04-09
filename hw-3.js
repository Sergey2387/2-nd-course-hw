// Задание 1
let password = 'qWerty123';
let passwordEnter = prompt('Введите пароль');
alert(passwordEnter === password ? 'Пароль введен верно' : 'Пароль введен неправильно');

// Задание 2
let c = 2;
alert(c > 0 && c < 10 ? 'Верно' : 'Не верно');

// Задание 3
let d = 80;
let e = 105;
alert(d < 100 || e < 100 ? 'Верно' : 'Неверно');

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
alert(+a + +b);

// Задание 5
let monthNumber = 12;
if (monthNumber > 12 || monthNumber < 1) {
  alert('Такого месяца нет');
}
switch (monthNumber) {
  case 12 :
  case 1:
  case 2:
    alert('Зима');
    break;
  case 3:
  case 4:
  case 5:
    alert('Весна');
    break;
  case 6:
  case 7:
  case 8:
    alert('Лето');
    break;
  case 9 :
  case 10:
  case 11:
    alert('Осень');
    break;
}

// Дополнительное задание 1
let number = Number(prompt('Пожалуйста, введите любое число'));
alert(isNaN(number) ? 'Введено не число' : 'Введено число');
alert(number % 2 === 0 ? 'Число четное' : 'Число нечетное');

// Дополнительное задание 2
let clientOS = 0;
console.log(clientOS === 0 ? 'Установите версию приложения для iOS по ссылке' : 'Установите версию приложения для Android по ссылке');

// Дополнительное задание 3
let clientOs = 1;
let clientDeviceYear = 2014;
let clientOsMessage = clientOs === 0 ? 'iOS' : 'Android';
let clientDeviceYearMessage = clientDeviceYear >= 2015 ? 'версию' : 'облегченную версию';
console.log(`Установите ${clientDeviceYearMessage} приложения для ${clientOsMessage} по ссылке.`);