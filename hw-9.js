// Задание №1
// Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>.
// Инструкция:
// В HTML создайте заголовок <h1> с текстом и кнопку.
// Используйте метод querySelector для получения ссылок на заголовок и кнопку.
// Используйте событие click и метод addEventListener, чтобы скрывать и показывать заголовок при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Скрыть» скрывает текст заголовка. Повторное нажатие показывает текст снова.

const header = document.querySelector('#h1');
const btn = document.querySelector('#button-hide');

btn.addEventListener('click', () => {
  header.style.display = header.style.display === 'none' ? '' : 'none';
  header.style.display === 'none'
    ? (btn.textContent = 'Показать')
    : (btn.textContent = 'Скрыть');
});

// Задание 2
// Задача: создайте кнопку, которая изменяет цвет текста в элементе <p>.
// Инструкция:
// В HTML создайте абзац <p> и кнопку.
// Используйте метод querySelector для получения ссылки на абзац и кнопку.
// Используйте событие click и метод  addEventListener, 
// чтобы изменить стиль элемента, например его цвет.
// Как должно работать: нажатие на кнопку «Изменить цвет» 
// делает текст абзаца синим.

const text = document.querySelector('#text1');
const btnColor = document.querySelector('#btn-color-text');

btnColor.addEventListener('click', () => {
  text.classList.toggle('text1-color');
  console.log(text);
});

// Задание 3
// Задача: создайте кнопку, которая меняет текст в заголовке 
// <h1>.
// Инструкция:
// В HTML создайте заголовок <h1> с текстом и кнопку.
// Используйте метод querySelector
//  для получения ссылки на заголовок и кнопку.
// Используйте событие click и метод addEventListener, чтобы изменить текст заголовка при нажатии на кнопку.
//  Как должно работать: нажатие на кнопку 
// «Изменить текст» меняет текст заголовка
//  на «Привет, мир!».

const btnChangeText = document.querySelector('#change-text');

btnChangeText.addEventListener('click', () => {
  header.textContent = header.textContent === 'Задание 1 и 3' ? 'Другой текст' : 'Задание 1 и 3';
});

// Задание 4
// Задача: найдите все элементы с классом description
//  и измените их текст на «Измененный текст».
// Инструкция:
// В HTML создайте несколько элементов с классом description.
// Используйте метод querySelectorAll для поиска всех элементов с этим классом.
// Переберите найденные элементы и измените их текстовое содержимое с помощью свойства 
// textContent.
// Как должно работать: после выполнения скрипта все элементы с классом 
// description изменяют свой текст на «Измененный текст».

const descFindAll = document.querySelectorAll('.description');

  descFindAll.forEach(descFindAll => {
    descFindAll.textContent = 'Измененный текст';
  })

//Задание 6
// Задача: создайте кнопку, которая добавляет новый элемент <p>
// с текстом в конец документа.//
// Инструкция://
// В HTML создайте кнопку.
// Используйте метод createElement для создания нового элемента.
// Используйте appendChild для добавления нового элемента в конец документа при нажатии на кнопку.
// Как должно работать: нажатие на кнопку «Добавить элемент» добавляет в конец страницы новый абзац с текстом «Новый абзац».

const btnNewP = document.querySelector('.new-p');
const newP = document.createElement('p');
newP.textContent = 'Новый абзац';

  btnNewP.addEventListener('click', () => {
    document.body.appendChild(newP)
  })