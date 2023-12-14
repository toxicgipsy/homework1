// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
people.sort(function (person1, person2 ) {
    if (person1.age > person2.age) {
      return 1;
    }
    if (person1.age < person2.age) {
      return -1;
    }
    return 0;
});

console.log(people);

// Задание 2
function isPositive(number) {
    return number > 0;
  }
  
  function isMale(person) {
    return person.gender === 'male';
  }
  
  function filter(array, predicate) {
    const result = [];
  
    for (const element of array) {
      if (predicate(element)) {
        result.push(element);
      }
    }
  
    return result;
  }
  
  console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  
  const person = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  
  console.log(filter(person, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]  

// Задание 3
let counter = 0;

function myFunction() {
  const currentDate = new Date();
  console.log(currentDate);

  counter++;

  if (counter === 10) {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
  }
}

const intervalId = setInterval(myFunction, 3000);
  

// // Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }
}, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));