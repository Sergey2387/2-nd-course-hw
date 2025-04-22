// Задание 1
let a = 1;
while (a <= 2) {
  console.log('Привет');
  a++;
}

// Задание 2
let b = 1;
while (b <= 5) {
  console.log(b);
  b++;
}
// Задание 3
let c = 7;
while (c <= 22) {
  console.log(c);
  c++;
}

// Задание 4
let obj = {
  'Коля': '200',
  'Вася': '300',
  'Петя': '400'
};
for (let Key in obj) {
  console.log(`${Key} - ${obj[Key]} долларов США`);
}

// Задание 5
let n = 1000;
let num = 0;
for (; n >= 50;) {
  n /= 2;
  num++;
}
console.log(num);

// Задание 6
let fridayFirst = 4;
for (let friday = fridayFirst; friday <= 31; friday += 7) {
  console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
  friday++;
}

// Дополнительное задание 1
let k = 100;
let iterations = 0;
for (; k >= 0; k -= 7 ) {
  iterations++

}
console.log(`Количество итераций : ${iterations}`);
console.log(`Число : ${k}`);

//Дополнительное задание 2
let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
let monthsNum = 0;

for (; monthsNum < months.length; monthsNum++) {
  console.log(`${months[monthsNum]} месяц № : ${monthsNum + 1} `);
}
months.forEach((month, index) => {
  console.log(
    `${month} - месяц № ${index + 1}`
  );
});

// Дополнительное задание 3
let book = {
  'название': 'Обучение веб разработке',
  'автор': 'sky.pro',
  'год издания': '2025',
  'жанр': 'обучение'
};
for (let bookKey in book) {
  console.log(`${bookKey} - ${book[bookKey]}`);
}

// Дополнительное задание 4
const arrayNum = [15, 6, 23, 14, 7, 8, 45, 56, 77, 58];
let minNumber = arrayNum[0];
for (let i = 1; i < arrayNum.length; i++) {
  if (arrayNum[i] < minNumber) {
    minNumber = arrayNum[i];
  }
}
console.log(minNumber);

