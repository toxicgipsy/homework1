// Задание 1
let hello = 0;

while (hello < 2) {
        console.log('Привет');
        hello++
}

// Задание 2
let five = 1;

while (five <= 5) {
    console.log(five);
    five++
}

// Задание 3
let twentyTwo = 7;

while (twentyTwo <= 25) {
    console.log(twentyTwo);
    twentyTwo++
}

// Задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}

for (let key in obj) {
    console.log(`${key} —— зарплата ${obj[key]} долларов`);
}

// Задание 5
let n = 1000;
let num = 0;

while (n > 50) {
    n = n / 2
    console.log(n);
    num++;
    if (n < 50) {
        console.log(num);
    }
}

// Задание 6
let day = 1;
let friday = 1;
// while (day <= 31) {
//     if (friday == day) {
//         console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
//         friday = friday + 7;
//     }
//     day++;
// }
for (day = 1; day <= 31; day++) {
    if (friday == day) {
        console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
        friday = friday +7;
    }
}