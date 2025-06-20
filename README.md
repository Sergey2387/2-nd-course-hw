# Мини-игры на JavaScript

Простой сайт с коллекцией мини-игр, реализованных с использованием HTML, CSS и JavaScript.

## 🎮 Описание
Этот проект представляет собой веб-сайт с шестью увлекательными мини-играми. Все игры работают через всплывающие окна (`prompt`, `alert`) и позволяют пользователю взаимодействовать с браузером без сложного интерфейса.

### Игры:
1. **Угадай число** — попробуйте угадать случайное число от 1 до 100.
2. **Простая арифметика** — решите простые математические задачи на сложение, вычитание, умножение и деление.
3. **Переверни текст** — введите текст, который будет перевернут.
4. **Камень, ножницы, бумага** — сыграйте против компьютера в классическую игру.
5. **Викторина** — ответьте на несколько вопросов и узнайте, сколько правильных ответов вы дали.
6. **Генератор случайных цветов** — при каждом клике фон страницы меняется на случайный цвет.

---

## 🧰 Технологии

- **HTML** — структура сайта.
- **CSS** **SCSS** — стили и адаптивный дизайн.
- **JavaScript** — логика игр и взаимодействие с пользователем.

---

## 🚀 Как запустить проект

1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/ваше-имя/mini-games.git
   ```

2. Откройте файл `index.html` в любом браузере.

> Для работы проекта не требуется установка дополнительных зависимостей.

---

## 📝 Функционал

### Игра №1: Угадай число
- Генерируется случайное число от 1 до 100.
- Пользователь пытается угадать число, получая подсказки («Больше» / «Меньше»).
- Подсчитывается количество попыток.

### Игра №2: Простая арифметика
- Генерируется случайный пример (+, −, ×, ÷).
- Пользователь должен ввести правильный ответ.
- Выводится результат проверки.

### Игра №3: Переверни текст
- Пользователь вводит текст.
- Текст переворачивается и выводится обратно.

### Игра №4: Камень, Ножницы, Бумага
- Пользователь выбирает один из вариантов.
- Компьютер делает свой выбор случайным образом.
- Определяется победитель или ничья.

### Игра №5: Викторина
- Предлагаются три вопроса с вариантами ответов.
- После прохождения выводится количество правильных ответов.

### Игра №6: Генератор случайных цветов
- При клике по кнопке фон изменяется на случайный цвет.

---

## 📁 Структура проекта

```
mini-games/
├── index.html          # Основная страница сайта
├── style.css           # Стили оформления
├── games.js            # Логика всех игр
└── img/                # Изображения для дизайна
```




