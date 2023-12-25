// Задание 1
// Напишите функцию, которая возвращает меньшее из 2 чисел.
function userNumbers() {
    let userNumbersOne = Number(prompt('Введи первое число'));
    let userNumbersTwo = Number(prompt('Введи второе число'));
    if (userNumbersOne > userNumbersTwo) {
        return(userNumbersTwo);
    } else {
        return(userNumbersOne);
    }
}

console.log(userNumbers());

// Задание 2
// Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.
function evenNumber() {
    let evenUserNumber = Number(prompt('Введи число'));
    let stringNumber = String(evenUserNumber);
    if (stringNumber % 2 == 0) {
        return('Число четное')
    } else {
        return ('Число нечетное')
    }
}

console.log(evenNumber());

//Задание 3
// 3.1. Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
function squareNumber() {
    let squareUserNumber = Number(prompt('Введи число'));
        console.log(squareUserNumber ** 2);
}

squareNumber();

// 3.2. Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа.
function squareUserNumberReturn() {
    let squareUserNumberReturn = Number(prompt('Введи число'));
        return(squareUserNumberReturn ** 2);
}

console.log(squareUserNumberReturn());

// Задание 4
function age () {
    let userAge = parseInt(prompt('Введи свой возраст'))
    if (userAge < 0) {
        alert('Вы ввели неправильное значение');
    } else if (userAge >= 0 && userAge <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

age();

// Задание 5
function twoNumbers(a, b) {
    let enterOneNumbers = Number(prompt('Введи первое число'));
    let enterTwoNumbers = Number(prompt('Введи второе число'));
    
    if (isNaN(enterOneNumbers) || isNaN(enterTwoNumbers)) {
        return ('Одно или оба значения не являются числом');
    } else {
        return (enterOneNumbers * enterTwoNumbers);   
    }
}

console.log(twoNumbers());

// Задание 6
function cubeNumber() {
let enterTheNumber = Number(prompt('Введи число'));
    if (isNaN(enterTheNumber) == true) {
        return 'Переданный параметр не является числом';
        
    } else {
        return (`n в кубе равняется ${enterTheNumber * 3}`)
    }
}

console.log(cubeNumber());

// Задание 7
// Создание объекта circle1
let circle1 = {
    radius: 10,
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

// Создание объекта circle2
let circle2 = {
    radius: 20,
    getArea: function() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};
console.log("Площадь circle1:", circle1.getArea()); 
console.log("Периметр circle1:", circle1.getPerimeter());

console.log("Площадь circle2:", circle2.getArea()); 
console.log("Периметр circle2:", circle2.getPerimeter());


// Задание 8
function seasons() {
    let monthNumber = Number(prompt('Введи цифру месяца'));
    if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
        return('Зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        return('Весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        return('Лето');
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        return('Осень');
    } else {
        return('Возможно когда-нибудь появится и 5 сезон, но это точно не на Замле');
    }
}

console.log(seasons());

