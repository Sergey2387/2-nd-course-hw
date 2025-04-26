// Требования
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
    const parseAnswer = parseFloat(userAnswer);
    if (isNaN(parseAnswer)) {
      alert('Введено некорректное значение.');
      continue;
    }
    if (Math.abs(parseAnswer - answer) < 0.0001) {
      alert('Правильно! Молодец!');
      break;
    }
    alert('Ответ неверен.');

  }

  // if (userAnswer === null) {
  //   alert('Вы отменили ввод.');
  //   return;
  // }
  //
  // const parseAnswer = parseFloat(userAnswer);
  //
  // isNaN(parseAnswer) ? alert('Введено некорректное значение.') : Math.abs(parseAnswer - answer) < 0.0001
  //   ? alert('Правильно! Молодец!'):
  //   alert(`Ответ неверен.`);

};
document.getElementById('start-game-2').addEventListener('click', mathQuiz);
