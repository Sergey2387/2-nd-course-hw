// Игра №1 Угадай число

const startGame = () => {
  const randomNumGenerate = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  const randomNum = randomNumGenerate;
  while (true) {
    const userNumInput = prompt('Угадайте число от 1 до 100');
    if (userNumInput === null) {
      alert('Игра отменена');
      break;
    }
    const userNum = Number(userNumInput);

    if (!userNum || Number.isNaN(userNum)) {
      alert('Введите число');
      continue;
    }
    // Счетчик попыток
    attempts++;

    if (userNum < randomNum) {
      alert('Больше');
    } else if (userNum > randomNum) {
      alert('Меньше');
    } else {
      alert(`Поздравляем! Вы угадали число ${randomNum} за ${attempts} попыток`);
      break;
    }
  }
};
document.getElementById('start-game-1').addEventListener('click', startGame);


// Игра №2 Простая арифметика

//Требования
// Сайт генерирует случайные задачи на сложение, вычитание, умножение и деление.
// Запрашивает у пользователя ответ.
// Проверяет правильность ответа и выводит результат.
//
// Последовательность действий
//
// Генерация задач:
// Случайным образом создавайте арифметические задачи на сложение, вычитание, умножение и деление.
// Например, задачи могут выглядеть так: "5 + 3", "10 - 2", "4 * 7", "20 / 4".
//
// Запрос ответа:
// Запрашивайте у пользователя ответ на сгенерированную задачу.
// Например, используя функцию
// prompt().
//
// Проверка и вывод результата:
// Проверьте правильность ответа пользователя.
// Выведите результат проверки: верный ответ или ошибка.

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const mathArray = ['-', '+', '*', '/'];

const mathProblem = () => {
  const mathOperator = mathArray[Math.floor(Math.random() * mathArray.length)];
  let num1, num2, answer;

  if (mathOperator === '-') {
    num1 = randomNum(1, 100);
    num2 = randomNum(1, num1 - 1);
    answer = num1 - num2;
  } else if (mathOperator === '+') {
    num1 = randomNum(1, 100);
    num2 = randomNum(1, 100);
    answer = num1 + num2;
  } else if (mathOperator === '*') {
    num1 = randomNum(1, 10);
    num2 = randomNum(1, 10);
    answer = num1 * num2;
  } else if (mathOperator === '/') {
    num2 = randomNum(10, 100);
    answer = randomNum(1, 100);
    num1 = num2 * answer;
  }
  return {
    problem: `${num1} ${mathOperator} ${num2}`,
    answer
  };

};
const mathQuiz = () => {
  const { problem, answer } = mathProblem();

  while (true) {
    const userAnswer = prompt(`Решите задачу : ${problem}`);
    if (userAnswer === null) {
      alert('Вы отменили ввод.');
      break;
    }
    const checkAnswer = Number(userAnswer);
    if (isNaN(checkAnswer)) {
      alert('Введено некорректное значение.');
      continue;
    }
    if (checkAnswer === answer) {
      alert('Правильно! Молодец!');
      break;
    }
    alert('Ответ неверен.');

  }

};
document.getElementById('start-game-2').addEventListener('click', mathQuiz);

// Игра №3 «Переверни текст»
// Описание
// создайте игру, где пользователю нужно ввести текст, который будет перевернут.
// Требования:
// Сайт запрашивает у пользователя текст.
// Сайт переворачивает введенный текст.
// Сайт выводит перевернутый текст.

const reverseText = () => {
  let userText = String(prompt('Введите текст'));

  if (userText === '') {
    alert('Вы не ввели текст');
    return reverseText();
  }
  if (/\d/.test(userText)) {
    alert('Введите текст без цифр');
    return reverseText();
  }
  let reversedText = userText.toUpperCase().split('').reverse().join('');

  alert(`Перевернутый текст: ${reversedText}`);
};

document.getElementById('start-game-3').addEventListener('click', reverseText);

// // Игра №5 «Викторина»
// Игра «Викторина»
// Описание
// создайте простую викторину с несколькими вопросами и вариантами ответов.
// Требования:
// Сайт предлагает несколько вопросов и вариантов ответов.
// Запрашивает у пользователя ответы на каждый вопрос.
// Подсчитывает и выводит количество правильных ответов.
// Последовательность создания игры Викторина:
//   Используйте предоставленный массив вопросов:
// Массив
// quiz
// содержит три вопроса с вариантами ответов и правильными ответами.
// // Массив вопросов и правильных ответов
//   const quiz = [
//   {
//     question: "Какой цвет небо?",
//     options: ["1. Красный", "2. Синий", "3. Зеленый"],
//     correctAnswer: 2 // номер правильного ответа
//   },
//   {
//     question: "Сколько дней в неделе?",
//     options: ["1. Шесть", "2. Семь", "3. Восемь"],
//     correctAnswer: 2
//   },
//   {
//     question: "Сколько у человека пальцев на одной руке?",
//     options: ["1. Четыре", "2. Пять", "3. Шесть"],
//     correctAnswer: 2
//   }
// ];
// Запросите у пользователя ответы. Используйте функцию
// prompt()
// для получения ответа пользователя на каждый вопрос.
//   Проверьте ответы и подсчитайте правильные:
//   Сравните ответ пользователя с правильным ответом и увеличьте счетчик правильных ответов, если ответ верный.
//   Выведите результат:
//   В конце игры выведите количество правильных ответов с помощью
// alert().

const quiz = [
  {
    question: 'Какой цвет у неба?',
    options: ['1. Красный', '2. Синий', '3. Зеленый'],
    correctAnswer: 2,
  },
  {
    question: 'Сколько дней в неделе?',
    options: ['1. Шесть', '2. Семь', '3. Восемь'],
    correctAnswer: 2,
  },
  {
    question: 'Сколько у человека пальцев на одной руке?',
    options: ['1. Четыре', '2. Пять', '3. Шесть'],
    correctAnswer: 2,
  }
];
const gameQuiz = () => {
  let correctAnswers = 0;
  for (const { question, options, correctAnswer } of quiz) {
    let userAnswer = Number(prompt(question + '\n' + options.join('\n')));
    if (userAnswer === null) {
      return alert('Вы отменили игру');
    }
    if (userAnswer === correctAnswer) {
      correctAnswers++;
      alert('Правильно');
    } else {
      alert('Неправильно');
    }
  }
  return alert(`Правильных ответов: ${correctAnswers}`);
};
document.getElementById('start-game-5').addEventListener('click', gameQuiz);