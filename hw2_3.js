// Задание 1
let password = 'Пароль';
let enterPass = String(prompt('Введите пароль'));
let firstChar = enterPass.charAt(0); // создаем переменную в которой говорим, что 1 [0 = 1] букву писать в верхнем регистре
let upperFirstChar = firstChar.toUpperCase(); // создаем вторую переменную, добавляем туда переменную из строки выше и говорим: всегда пиши в верхнем регистре 1 букву
let restOfString = enterPass.slice(1); // создаем третью переменную и добавляем туда enterPass в которой все буквы начиная с 2 переводим в нижний регистр
let result = upperFirstChar + restOfString; // присваиваем две переменные одной и всё это выводим в условие к if 

if (result == password) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
};

// Задание 2
let c = Number(prompt('Введи число'));
(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');

// Задание 3
let d = Number(prompt('Введи первое число'));
let e = Number(prompt('Введи второе число'));

(d > 100 || e > 100 ) ? console.log('Верно') : console.log('Неверно');

// Задание 4
let a = '2';
let b = '3';

alert(+a + +b);

// Задание 5
let monthNumber = Number(prompt('Введи цифру от 1 до 12'));

switch (monthNumber) {
    case 1:
        alert ('Зима');
        break;
    case 2:
        alert ('Зима');
        break;
    case 12:
        alert ('Зима');
        break;
    case 3:
        alert ('Весна');
        break;
    case 4:
        alert ('Весна');
        break;
    case 5:
        alert ('Весна');
        break;
    case 6:
        alert ('Лето');
        break;
    case 7:
        alert ('Лето');
        break;
    case 8:
        alert ('Лето');
        break;
    case 9:
        alert ('Осень');
        break;
    case 10:
        alert ('Осень');
        break;
    case 11:
        alert ('Осень');
        break;
    default:
        alert('Подожди немного, может выйдет и 5 сезон ;)');
    break;
}
