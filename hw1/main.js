

// function helloName(name) {
//     console.log(name);
// }

// helloName('Alex');

// let count = 5;

// function counter() {
//     return count++;
// }

// counter();
// counter();
// counter();

// console.log(count);  

// let age = Number(prompt('Сколь вам лет?'))

// function upAge() {
//     return age + 5;
// }
// console.log(`Через 5 лет вам будет ${upAge(age)}`);

// const lvlUpAge = () => age + 5;


// console.log(`Через 5 лет вам будет ${lvlUpAge()}`);

// function hello() {
//     console.log('Hello world')
// }

// hello();

// const sum = (param1, param2) => {
//     return param1 + param2;
// }

// const result = sum(2,5);

// console.log(result);


// const salary = (money) => {
//     money = money * 0.87;
//     money = money * 0.75;
//     return money;
// }

// console.log(salary(100));

// function buy () {
//     alert(`Вы нажали кнопку "купить"`)
// }
// const userAnswer = prompt(`Зимой и летом одним цветов`);

// if (userAnswer === 'елка') {
//     console.log (`Угадал`)    
// } else {
//     console.log(`Не угадал`)
// }

// const userAnswer2 = prompt(`Сидит дед во 100 шуб одет, кто его раздевает, тот слезы проливает`);

// if (userAnswer === 'лук') {
//     console.log (`Угадал`)    
// } else {
//     console.log(`Не угадал`)
// }

// function askQuestion(answer, question) {
//     const userAnswer = prompt(question);
//     if (userAnswer.toLocaleLowerCase() === answer) {
//         alert(`Угадал`);  
//     } else {
//         alert(`Не угадал`);
//     }
// }


// function puzzle() {
//     askQuestion('лук', 'Сидит дед во 100 шуб одет, кто его раздевает, тот слезы проливает');
//     askQuestion('елка', 'Зимой и летом одним цветов');
// }

//  let count = 0;
//  while (count < 3) {
//     console.log('Hello');
//     count++;
//  }

//  for (let i = 0; i < 3; i++) {
//     console.log('Hello');
//  }

//  for (let j = 0; j <= 2; j+5) {
//     console.log(j);
//  }

// let pass;
// let count = 0;
// function passwdchk() {
// do {
//     if (count > 3) {alert('Пароль неверный')}
//     pass = Number(prompt('Введите пароль'));
//     count++;
// } while (pass !== 234);}

// const user = []

// user.push(prompt('Введите ваше имя'))
// user.push(prompt('Введите ваш возраст'))

// console.log(user)

// const numbers = [2,3,19,15]
// console.log(numbers);
// alert(`Запомни цифры ${numbers}`)

// console.log(numbers.pop());
// console.log(numbers);

// const words = 'example';
// const arrWord = words.split('');
// const upWord = arrWord.pop();
// arrWord.push(upWord.toLocaleUpperCase());
// console.log(arrWord.join('')); 

// const arr = [1,2,3,7,19]

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//      if (element >= 5) {
//         console.log(element)
//      } else {
//         continue;
//      }
// }
// console.log(arr.indexOf(3))

// const arrAnswers = ['елка', 'ёлка', 'ель']
// const userAnswer = prompt('Зимой и летом одним цветом')

// for (let i = 0; i < arrAnswers.length; i++) {
//     const element = arrAnswers[i];
//     if (element === userAnswer) {
//         console.log('Правильно');
//         break;
//     } else {
//          continue;
//     }
    
// }


// const product = {
//     name: 'Table', 
//     ProductPrice: 200,
//     count: 2,
//     buy: function() { if (product.count >0 ) {
//         console.log('Вы купили данный товар');
//         product.count = product.count - 1;
//         } else {
//         console.log('Товара нет в наличии')
//         }
//     },
//     userRegistred: false,
//     buyProduct: function () {
//         if (this.userRegistred) {
//             this.buy();
//         } else {
//             console.log('Сначала зарегистрируйтесь');
//         }
//     },
//     reg: function() {
//         if (product.userRegistred) {
//             console.log('Вы уже зарегистрированы');            
//         } else {
//             console.log('Успешная регистрация');
//             this.userRegistred = true;
//         }
//     }
// }
// product.buy()
// let productSale = product;
// console.log(product);
// productSale.text = 'Cтол'
// console.log(productSale);
// console.log(product)

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// function mergeArrays(arr1, arr2) {
//     const result = [...arr1, ...arr2]
//     return result;
//     }  
// console.log(mergeArrays(arr1,arr2))


// function removeDuplicates (...arguments) {
//     return arguments.filter((value, index) => arguments.indexOf(value) === index);
//     // return arguments.filter(item => item > 3);
// }

// console.log(removeDuplicates(1,2,1,2,4,6,4,5,5,5,5,7,1,2,3,4,5,6,7,8,9));

// const array1 = [1,2,1,2,4,6,4,5,5,5,5,7,1,2,3,4,5,6,7,8,9] 
// const array2 = [30,52,53,10,41,46,75,54,52]
// const text1 = 'example example';

// function getEveNumbers(array) {
//     return array.filter(item => item%2 == 0 );
// }
// function calculateAverage(array) {
//     const avg = array.reduce((acc, curr) => acc + curr, 0)/ (array.length)
//     return avg
// }
// function capitalizeFirstLetter(string) {
//     const arr = string.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
//     return arr;
// } 

// function createcalculator (argument) {
//     let value = argument;
//     return {
//          add:  (argument) => {value += argument},
//          substract : (argument) => {value -= argument},
//         result: function() {
//             return value;
//         }
//     }
// }

// console.log(getEveNumbers(array1));
// console.log(calculateAverage(array1));
// console.log(capitalizeFirstLetter(text1));
// const calc = createcalculator(5);
// calc.add(5);
// calc.substract(3);
// console.log(calc.result()); 

// function createGreeting (text) {
//     let value = text;
//     return `Hello, ${value}`;
// }

// console.log(createGreeting('world'));

// function isPasswordChecker (passw) {
//     if (String(passw).length < 8) {
//         console.log(`Длина пароля меньше 8 символов`);
//     } else {
//         createPassword(passw);
//     }    
// }

// function createPassword(passw) {
//     console.log(`Пароль успешно создан`);
// }

// isPasswordChecker

// 1) Дан массив const arr = [1, 5, 7, 9] 
// с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

// const arr = [1,5,7,9]

// function task1 (arr) {
//     const minNumber = Math.min(...arr);
//     console.log(minNumber)
// }
// 2) Напишите функцию createCounter, 
// которая создает счетчик и возвращает объект с двумя методами: increment и decrement. 
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

// function createCounter(num) {
//     let value = num;
//     return{
//     increment: () => {value+=1;},
//     decrement: () => {value-=1;},
//     result : function() {
//         return value;
//     }
//     }
// }
// const counter = createCounter(1);

// function increment() {
//     counter.increment(1)
// }
// function decrement() {
//     counter.decrement(1)
// }
// function result() {
//     console.log(counter.result())
// }

// const Person = {
//     _name: "",
//     age: 0,
//     gender: "",
//     introduce() {
//         console.log(`Hello, my name is ${this._name}, i'm ${this.age} years old, my gender is ${this.gender}`)
//     },
//     changeName(newName) {
//         this._name = newName;
//     },
//     changeAge(newAge) {
//         if (newAge < 0) {
//             console.log('Error')
//         }
//         else {
//             this.age = newAge;
//         }
//     },
//     changeGender(newGender) {
//         if (newGender != 'male' || newGender != 'female') {
//             console.log('Error')
//         } else {
//             this.gender = newGender;
//         }
//     }
// }

// Person._name = 'Mary'
// Person.age = 25
// Person.gender = 'female'

// const Animal = {
//     _name: '',
//     eat() {
//         console.log(`${this._name} is eating`)
//     }
// }

// const dog = {
//     _name: '',
//     bark() {
//         console.log(`Bark, bark`)
//     }
// }

// dog._name = 'Rex'
// dog.eat = Animal.eat;
// dog.eat()


// const calculator = {
//     add(num1, num2) {
//         return (num1 + num2)
//     }
//     ,substract() {
//         return(num1 - num2)
//     }
//     ,multiply() {
//         return(num1 * num2)
//     }
//     ,divide(num1, num2) {
//         if (num2 != 0) {
//             return(num1/num2)
//         } else {
//             console.log('Division by zero!')            
//         }
//     }
// }


// class Person {
//     constructor (_name, age, gender) {
//         this._name = _name
//         this.age = age
//         this.gender = gender
//     }
//     introduce() {
//         console.log(`Hello, my name is ${this._name}, i'm ${this.age} years old, my gender is ${this.gender}`)
//     }
//     changeName(newName) {
//         this._name = newName;
//     }
//     changeAge(newAge) {
//         if (newAge < 0) {
//             console.log('Error')
//         }
//         else {
//             this.age = newAge;
//         }
//     }
//     changeGender(newGender) {
//         if (newGender != 'male' || newGender != 'female') {
//             console.log('Error')
//         } else {
//             this.gender = newGender;
//         }
//     }
// }

// const mary = new Person ('Masha', 20, 'female');
// const anton = new Person ('Anton', 25, 'male');
// mary.introduce()
// anton.introduce()
// anton.age = mary.age;
// anton.introduce()

// class BankAccount {
//     constructor(accountNumber, balance = 0 ) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
    
//     }
//     deposit(summ) {
//         this.balance = this.balance + summ;
//         console.log(`Вы пополнили счет на ${summ} долларов, ваш баланс: ${this.balance} долларов`)
//     }
//     withdraw(summ) { 
//         if (this.balance>summ) {
//             this.balance = this.balance - summ;
//             console.log(`Вы снаяли со счета ${summ} долларов, ваш баланс: ${this.balance} долларов`)
//         } else {
//             console.log(`Запрошенная сумма больше вашего баланса`)
//         }
//     }
//     balanceCheck() {
//         console.log(`Ваш баланс: ${this.balance} долларов`)
//     }
// }

// const acc1 = new BankAccount(1, 1000);

// acc1.balanceCheck()







// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

class book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    displayinfo() {
        console.log(`Название книги: ${this.title},автор:${this.author}, количество страниц:${this.pages}`)
    }
}

const unknowhBook = new book(null, null, 100)

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayinfo() {
        console.log (`Имя: ${this.name} Возраст:${this.age} Класс:${this.grade} `)
    }
}

const newStudent = new Student('Студент', 23, '4')

function task1() {
    return unknowhBook.displayinfo()
}
function task2() {
    return newStudent.displayinfo()
}