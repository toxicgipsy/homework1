// Задание 1
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10) break;
    console.log(numbs[i]);
}

// Задание 2
let elIndex = [1, 5, 4, 10, 0, 3];

console.log(elIndex.indexOf(4));

// Задание 3
let numbsJoin = [1, 3, 5, 10, 20];

console.log(numbsJoin.join(' '));

// Задание 4
let rows = 3;
let cols = 3;
let multiArray = [];

for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
        row.push(1);
    }
    multiArray.push(row);
}

console.log(multiArray);

// Задание 5
let addArray = [1, 1, 1];
addArray.push(2, 2, 2)

console.log(addArray);

// Задание 6
let sortArr = [9, 8, 7, 'a', 6, 5];

sortArr.sort();
console.log(sortArr);
sortArr.pop('a');
console.log(sortArr);

// Задание 7
let arrQuestion = [9, 8, 7, 6, 5];
let enterNumber = Number(prompt('Введи число от 5 до 9'));

if (arrQuestion.includes(enterNumber)) {
    console.log('Угадал');
} else {
    console.log('Не угадал');
};

// Задание 8
let arrReverse = 'abcdef';
let reversedStr = arrReverse.split('').reverse().join('');

console.log(reversedStr);

// Задание 9
let consoleArr = [[1, 2, 3,], [4, 5, 6]];
let flattenedArr = consoleArr[0].concat(consoleArr[1]);

console.log(flattenedArr);

// Задание 10
let arbitraryArray = [4, 6, 5, 8, 9, 2, 3, 1, 7, 10];

for (let index = 0; index < arbitraryArray.length - 1; index++) {
    let sum = arbitraryArray[index] + arbitraryArray[index + 1];

    console.log(`Сумма текущего и следующего элемента ${sum}`);
};

// Задание 11
function squareArray(arr) {
    let squaredArray = arr.map(function (num) {
        return num * num;
    });
        return squaredArray;
}
let inputArray = [1, 2, 3, 4, 5];
let resultArray = squareArray(inputArray);

console.log(resultArray);

// Задание 12
function wordLengthsArray(arr) {
    let lengthsArray = arr.map(function (word) {
        return word.length;
    });

    return lengthsArray;
}

let inputLengthsArray = ["деньги", "власть", "сила", "потомство"];
let resultLengthsArray = wordLengthsArray(inputLengthsArray);

console.log(resultLengthsArray);

// Задание 13
function filterPositive(array) {
    let negativeArray = array.filter(function (num) {
        return num < 0;
    });

    return negativeArray;
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

// Задание 14
let originalArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

console.log("Исходный массив:", originalArray);

let evenArray = originalArray.filter(function (num) {
    return num % 2 === 0;
});

console.log("Массив с четными значениями:", evenArray);

// Задание 15
let array = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

console.log("Массив:", array);

let sum = array.reduce((acc, num) => acc + num, 0);
let average = sum / array.length;

console.log("Среднее арифметическое:", average);
