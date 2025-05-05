

// Задание 1
// Дан массив:  [1, 5, 4, 10, 0, 3].
// Создайте цикл, который будет выводить элементы массива до тех пор,
// пока не встретит значение 10.
// После вывода значения 10 в консоль цикл должен прекратить свою работу.

const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
  if (array[i] === 10) {
    console.log(array[i]);
    break;
  }

}

// Задание 2
// Дан массив:  [1, 5, 4, 10, 0, 3].
// Найдите индекс значения 4  в этом массиве.

const array2 = [1, 5, 4, 10, 0, 3];

const index = array2.indexOf(4);

console.log(index);

// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через пробел (пустую строку' ').

const array3 = [1, 3, 5, 10, 20];

const joinArray = array3.join(' ');
console.log(joinArray);

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида:
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]] .

const multiArray = [];

for (let i = 0; i < 3; i++) {
  multiArray.push([]);
  for (let j = 0; j < 3; j++) {
    multiArray[i].push(1);
  }
  console.log(multiArray[i]);
}

// Задание 5
// Дан массив: [1, 1, 1].
// Добавьте в конец массива значения 2, 2, 2.

const array5 = [1, 1, 1];
array5.push(2, 2, 2);
console.log(array5);

// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a' из массива.
// Затем выведите массив.

const array6 = [9, 8, 7, 'a', 6, 5];
array6.sort();
array6.pop();
console.log(array6);

// Задание 7
// Дан массив: [9, 8, 7, 6, 5].
// Попросите пользователя угадать число с помощью метода prompt .
// Если значение, которое ввел пользователь, есть в массиве, выведите в alert
// «Угадал», в противном случае — «Не угадал».

const array7 = [9, 8, 7, 6, 5];

const guessNumber = () => {
  const userNumber = prompt('Угадайте число');
  if (userNumber === null) {
    alert('Вы отменили ввод');
    return;
  }
  if (array7.includes(Number(userNumber))) {
    alert('Угадал');
    return;
  } else {
    alert('Не угадал');
  }
  return guessNumber();
};
guessNumber();

// Задание 8
// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.

const string8 = 'abcdef';
const splitString = string8.split('');
const reverseArray = splitString.reverse();
const newString8 = reverseArray.join('');
console.log(newString8);

// Задание 9
// Дан массив: [[1, 2, 3],[4, 5, 6]].
// Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const array9 = [[1, 2, 3], [4, 5, 6]];
const spreadArray = [].concat(...array9);
console.log(spreadArray);

// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10 ).
// Переберите его с помощью цикла for.
// В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса: i + 1.
// Обратите внимание, что у последнего элемента нет следующего.

const array10 = [4, 2, 8, 1, 5, 6, 9, 3, 7, 10];

for (let i = 0; i < array10.length - 1; i++) {
  console.log(array10[i] + array10[i + 1]);
}

// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел,
// а возвращает массив квадратов этих чисел.

const arrayFunction11 = () => {
  const array11 = [2, 4, 3, 4, 5];
  return array11.map(num => num * num);
};

console.log(arrayFunction11());

// Задание 12
// Создайте функцию, которая принимает на вход массив строк,
// а возвращает массив длины слов.

const arrayFunction12 = () => {
  const array12 = ['pc', 'laptop', 'tablet', 'mobile'];
  return array12.map(word => word.length);
};

console.log(arrayFunction12());

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел,
// а возвращает массив, содержащий только отрицательные значения.

const arrayFunction13 = () => {
  const array13 = [2, -3, 4, 6, -9, 3, -7];
  return array13.filter(num => num < 0);
};

console.log(arrayFunction13());

// Задание 14
// Создайте массив, состоящий из 10 значений.
// Значения массива необходимо сгенерировать с помощью метода Math.random()
// в диапазоне от 0 до 10.
// В данном массиве найдите все четные значения и добавьте их в новый массив.
// Результат работы программы необходимо вывести в консоль — это будут два массива:
// исходный массив и массив с четными значениями.

const array14 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
const evenArray14 = array14.filter(num => num % 2 === 0 && num > 0);

console.log('Исходный массив:', array14);
console.log('Массив с четными значениями:', evenArray14);

// Задание 15
// Создайте массив, состоящий из 6 элементов.
// Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

const array15 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 11));
const sumArray15 = array15.reduce((sum, num) => sum + num, 0);
const averageArray15 = sumArray15 / array15.length;

console.log(`Созданный массив: ${array15}`);
console.log(`Сумма чисел в массиве: ${sumArray15}`);
console.log(`Среднее арифметическое чисел в массиве: ${averageArray15}`);




