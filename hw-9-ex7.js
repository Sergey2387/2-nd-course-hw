// Задание 7
// Задача: создайте кнопку, которая удаляет первый элемент <p>
// с классом description.
// Инструкция:
// В HTML создайте несколько абзацев <p>,
// некоторые из них должны иметь класс description.
// Используйте метод querySelector для поиска первого элемента с классом
// description.
// Используйте метод remove для удаления этого элемента при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Удалить элемент» удаляет первый абзац с классом
// description со страницы.

const descP = document.querySelector('.description');
const btnDel = document.querySelector('.delete-p');

btnDel.addEventListener('click', () => {
  descP.remove();
})