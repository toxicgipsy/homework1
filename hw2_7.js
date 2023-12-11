// Задание 1
let primitiveStr = 'Примитивная строчка';

console.log(primitiveStr.toUpperCase());

// Задание 2
const searchStr = ['Книга', 'Ракета', 'Калейдоскоп', 'Канал', 'Банан', 'Карандаш'];
const search = 'Ка';

searchStr.forEach((str) => {
    if (str.toLowerCase().includes(search.toLowerCase())) {
        console.log(str);
    }
});

// Задание 3
const number = 32.58884;

const roundedDown = Math.floor(number);
const roundedUp = Math.ceil(number);
const roundedNearest = Math.round(number);

console.log(roundedDown);
console.log(roundedUp);
console.log(roundedNearest);

// Задание 4
const arrNumbers = [52, 53, 49, 77, 21, 32];
const minNumber = Math.min(...arrNumbers);
const maxNumber = Math.max(...arrNumbers);

console.log(`Наименьшее число: ${minNumber}`);
console.log(`Наибольшее число: ${maxNumber}`);

// Задание 5
function randomNumbers(max) {
    return Math.floor(Math.random() * max);
};

console.log(randomNumbers(10));

// Задание 6
function genRandomArray(maxNumber) {
    if (Number.isInteger(maxNumber)) {
        const arrayLength = maxNumber / 2;
        const randomArray = [];

        for (let i = 0; i < arrayLength; i++) {
            const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
            randomArray.push(randomNumber);
        }

        return randomArray;
    } else {
        return 'Введи число';
    }
}

let resultArray = genRandomArray(10);
console.log(resultArray);

// Задание 7
function getRandomInt(min, max) {
    if (Number.isInteger(min) && Number.isInteger(max)) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return 'Введи число'
    }
};

let result = getRandomInt(1, 10)
console.log(result);


// Задание 8
let currentDate = new Date();

console.log(currentDate);

// Задание 9
let currentDateToday = new Date();
let currentDateFuture = 73 * 24 * 60 * 60 * 1000;
let future = +currentDateToday + currentDateFuture;
let daysfuture73 = new Date(future);

console.log(daysfuture73);

// Задание 10
// function todayIs() {
//     const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//     const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

//     let myDate = new Date(); 
//     let weekDay = String(prompt(`Введи день недели`));
//     let month = String(prompt(`Введи название месяца`));
    
//     if (days.includes(weekDay) && months.includes(month)) {
//         let myDate = new Date();
//         return `Сегодня: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} ${days[myDate.getDay()]} ${myDate.getHours().toString().padStart(2, '0')}:${myDate.getMinutes().toString().padStart(2, '0')}:${myDate.getSeconds().toString().padStart(2, '0')}`;
//     } else {
//         return `Я пока не умею такое обрабатывать, введи то, что прошу`
//     }
// }

// console.log(todayIs());


function todayIs() {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    let myDate = new Date(); 
    
    if (days.includes(days[myDate.getDay()]) && months.includes(months[myDate.getMonth()])) {
        return `Сегодня: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} — это ${days[myDate.getDay()]} ${myDate.getHours().toString().padStart(2, '0')}:${myDate.getMinutes().toString().padStart(2, '0')}:${myDate.getSeconds().toString().padStart(2, '0')}`;
    } else {
        return `Я пока не умею такое обрабатывать`
    }
}

console.log(todayIs());


// Задание 11
function shuffleArrayAndGuess() {
    const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits.sort(() => Math.random() - 0.5);

    alert(fruits);

    function askQuestion(promptText) {
        return prompt(promptText);
    }

    const firstElementGuess = askQuestion('Чему равнялся первый элемент массива?');
    const lastElementGuess = askQuestion('Чему равнялся последний элемент массива?');

    if (firstElementGuess === fruits[0] && lastElementGuess === fruits[fruits.length - 1]) {
        alert('Поздравляю! Вы угадали оба элемента!');
    } else if (firstElementGuess === fruits[0] || lastElementGuess === fruits[fruits.length - 1]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно. Попробуйте еще раз.');
    }
}

shuffleArrayAndGuess();