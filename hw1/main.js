

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

// const elemswers = ['елка', 'ёлка', 'ель']
// const userAnswer = prompt('Зимой и летом одним цветом')

// for (let i = 0; i < elemswers.length; i++) {
//     const element = elemswers[i];
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

// function mergetaskss(arr1, arr2) {
//     const result = [...arr1, ...arr2]
//     return result;
//     }  
// console.log(mergetaskss(arr1,arr2))


// function removeDuplicates (...arguments) {
//     return arguments.filter((value, index) => arguments.indexOf(value) === index);
//     // return arguments.filter(item => item > 3);
// }

// console.log(removeDuplicates(1,2,1,2,4,6,4,5,5,5,5,7,1,2,3,4,5,6,7,8,9));

// const tasks1 = [1,2,1,2,4,6,4,5,5,5,5,7,1,2,3,4,5,6,7,8,9] 
// const tasks2 = [30,52,53,10,41,46,75,54,52]
// const text1 = 'example example';

// function getEveNumbers(tasks) {
//     return tasks.filter(item => item%2 == 0 );
// }
// function calculateAverage(tasks) {
//     const avg = tasks.reduce((acc, curr) => acc + curr, 0)/ (tasks.length)
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

// console.log(getEveNumbers(tasks1));
// console.log(calculateAverage(tasks1));
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







// // Задание 1: ""Управление библиотекой книг""

// // Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// class book {
//     constructor (title, author, pages) {
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//     }
//     displayinfo() {
//         console.log(`Название книги: ${this.title},автор:${this.author}, количество страниц:${this.pages}`)
//     }
// }

// const unknowhBook = new book(null, null, 100)

// // Задание 2: ""Управление списком студентов""
// // Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// // Свойство name (имя) - строка, имя студента.
// // Свойство age (возраст) - число, возраст студента.
// // Свойство grade (класс) - строка, класс, в котором учится студент.
// // Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// // javascript

// class Student {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }
//     displayinfo() {
//         console.log (`Имя: ${this.name} Возраст:${this.age} Класс:${this.grade} `)
//     }
// }

// const newStudent = new Student('Студент', 23, '4')

// function task1() {
//     return unknowhBook.displayinfo()
// }
// function task2() {
//     return newStudent.displayinfo()
// }

// function getPrototypeChain(obj) {
//     const arr = [];

//     let currentObj = obj;

//     while (currentObj !== null) {
//         arr.push(currentObj);
//         currentObj = Object.getPrototypeOf(currentObj);
//     }
//     return arr;
// }


// const MusicSeries = {
//     model: 'music series',
//     power: 200,
//     batterySize: 2000,
//     boxSize: 0.5,
//     workTime: 45,
//     startWipe() {
//         console.log('Method of MusicSeries');
//     }
// }

// const Blues = {
//     model: 'Blues-1',
//     power: 250,
//     batterySize: 2500,
//     workTime: 50
// }

// Object.setPrototypeOf(Blues, MusicSeries);


// const prototypeChain = getPrototypeChain(Blues);
// console.log(prototypeChain);

// class Animal {
//     constructor (name) {
//         this.name = name
//       }
//     speak() {
//         console.log(`Животное ${this.name} издает звук`)
//     }
// }

// class dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }
//     fetch() {
//     console.log(`Собака ${this.name} породы ${this.breed} принесла мяч`)

//     }
// }

// const hasky = new dog('Зюзя','Хаски');
// hasky.speak();
// hasky.fetch();

// class product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class shoppingCart {
//     constructor(customerName, initialTotalCost = 0) {
//         this.customerName = customerName;
//         this.initialTotalCost = initialTotalCost;
//         this.totalCost = initialTotalCost;
//     }
//     arr1 = []
    
//     addItem(product, quantity = 1) {
//         this.totalCost = this.totalCost + product.price * quantity;
//         this.arr1.push(product.name);
//     }
    
//     checkout() {
//         console.log(`Заказ оформлен для покупателя ${this.customerName} на общую стоимость ${this.totalCost}. Содержимое заказа: ${(this.arr1)}`)
//     }
// }

// const jeans = new product('Джинсы', '2000');
// const t_shirt = new product('Футболка', '1000')
// const cart1 = new shoppingCart('Покупатель');

// cart1.addItem(jeans, 2);
// cart1.addItem(t_shirt, 2)
// cart1.checkout();





// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith
// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales

// class Employee {
//     constructor (name) {
//         this.name = name;
//     }
//     displayInfo() {
//         console.log(`Name: ${this.name}`)
//     }
// }

// class Manager extends Employee {
//     constructor (name, department) {
//         super(name)
//         this.department = department
//     }
//     displayInfo() {
//         console.log(`Name: ${this.name}, deparment: ${this.department}`)
//     }
// }

// const Jonh = new Employee('Jonh');
// const Jane = new Manager('Jane', 'Support');

// function task1() {
//     Jonh.displayInfo();
//     Jane.displayInfo();
// }



// // ""Управление списком заказов""

// // Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// // Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// // Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// // Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// // Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
// // // Пример использования класса
// // class Product {
// // constructor(name, price) {
// // this.name = name;
// // this.price = price;
// // }
// // }
// // const order = new Order(12345);
// // const product1 = new Product(""Phone"", 500);
// // order.addProduct(product1);
// // const product2 = new Product(""Headphones"", 100);
// // order.addProduct(product2);
// // console.log(order.getTotalPrice()); // Вывод: 600

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class Order {
//     constructor (orderNumber, products = [], totalprice = 0) {
//         this.orderNumber = orderNumber;
//         this.products = products;
//         this.totalprice = totalprice
//     }
//     addproduct(product) {
//         this.products.push(product.name)
//         this.totalprice = this.totalprice + product.price
//         console.log(`${product.name} added to order,total: ${this.totalprice} USD`)
//     }
//     getTotalPrice() {
//         console.log(`Your order is: ${this.products}, total price is ${this.totalprice} USD`)
//     }
// }
// const iPhone = new Product('iphone', 1000)
// const headPhones = new Product('HeadPhones', 100)
// const order324 = new Order(324)

// function task2() {
//     order324.addproduct(iPhone);
//     order324.addproduct(headPhones);
//     order324.getTotalPrice();
// }

// function delayedMessage(message, delay) {
//     setTimeout(() => console.log(message), delay);
// }

// delayedMessage('Сообщение 1', 2000);
// delayedMessage('Сообщение 2', 1000);
// delayedMessage('Сообщение 3', 3000);


// const tasks = [
//     {name: 'task 1', time: 1000},
//     {name: 'task 2', time: 2000},
//     {name: 'task 3', time: 3000},
//     {name: 'task 4', time: 4000},
//     {name: 'task 5', time: 5000},
// ];


// console.log(tasks[0].time);

// function taskSheduler(task, delay) {
//     setTimeout(() => console.log(`${task} - ${delay}`), delay)   
// };

// for (let i = 0; i < tasks.length; i++) {
//     taskSheduler(tasks[i].name, tasks[i].time);
// };



// tasks.forEach(element => {
//     taskSheduler(element.name, element.time)

// });


// let count = 0;

// for (let i = 0; i < tasks.length; i++) {
//     count += tasks[i].time;
//     taskSheduler(tasks[i].name, count)
// };



// function loadData(url) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.status !==200) { //если статус не 200, то произошла ошибка
//             console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//         } else {
//             console.log(`user ${xhr.response}`); // response - это ответ сервера
//         }
//     };
//     xhr.open('GET', url, true);
//     xhr.send();
// }
// loadData('https://jsonplaceholder.typicode.com/users')


// async function name() {

// }

// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'http://api.github.com/users/octocat')

// xhr.send();

// xhr.onload = function() {
//     if (xhr.status != 200) { 
//         console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     } else {
//         console.log(`user: ${xhr.response}`);
//     }
// };

// xhr.onprogress = function(event) {
//     console.log(`Get from server ${event.loaded}`);
// };

// xhr.onerror = function() {
//     console.log(`Request error`)
// };

// Объект JSON //
// const student = {
//     name: 'Slava',
//     surname: 'Belkin',
//     age: 20,
//     practice:{
//         place: 'IKTG',
//         hours:47,
//     }
// };

// console.log(JSON.stringify(student, null, 4));


// console.log(JSON.parse(`{"name": "Slava", "surname": "Belkin","age": 20, "practice": { "place": "IKTG", "hours": 47 }}`))


// const getUser = async (url)=> {
//     const response = await fetch(url);
//     const user = await response.text();
//     console.log(user);
// }

// getUser('http://api.github.com/users/octocat')

// const response1 = async(url) {
//     const response = await fetch(url);
//     const text1 = await response.text();
//     console.log(text1);
// }


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response1) => response1.json())
// ;.then((data) => console.log(answer));

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((response) => response.json())
//     .then((elem) => listUser(elem));

// const userListC = document.querySelector(`userList`)
// function listUser(elem) {
//     userArr = [];
//     for (let i = 0; i< elem.length; i++) {
//         userArr.push(elem[i].name);
//         userListC.innerHTML += elem[i].name + '<br>';
//     };

//     userArr = userArr.sort();
//     userListC.innerHTML +='<br>'

//     for (let i = 0; i < userArr.length; i++) {
//         userListC.innerHTML += userArr[i] + '<br>'; 
//     }
// };



// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) 
// в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. 
// Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. 
// Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.
// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. 
// Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. 
// Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

function getUserData(userID) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('User not found');
                }
                return response.json();
            })
            .then(userData => {
                resolve(userData);
            })
            .catch(error => {
                reject(error.message);
            });
    });
}

function task1() {
    const userID = prompt(`Введите id пользователя`)
    getUserData(userID)
    .then(userData => {
        console.log('Name:', userData.name);
        console.log('email:', userData.email);
        console.log('address:', userData.address);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


// ""Отправка данных на сервер""
// Реализуйте функцию saveUserData, 
// которая принимает объект с данными о пользователе в качестве аргумента 
// и использует fetch для отправки этих данных на удаленный сервер для сохранения. 
// Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.
// *Подсказка *
// // Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };
// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. 
// Она отправляет POST-запрос на URL-адрес /users с указанием типа 
// содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). 
// Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

function saveUserData(userData) {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to save user data');
            }
            resolve();
        })
        .catch(error => {
            reject(error);
        });
    });
}


function task2() {
    const user = {
        name: 'John Smith',
        age: 30,
        email: 'john@example.com'
    };
    
    saveUserData(user)
        .then(() => {
            console.log('User data saved successfully');
        })
        .catch(error => {
            console.error(error.message);
        });
}


// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. 
// Функция должна изменить стиль элемента через указанное время.
// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"


function changeStyleDelayed(elementId, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.color = 'red'; 
        } else {
            console.error('Элемент с указанным идентификатором не найден.');
        }
    }, delay);
}

function task3() {
    changeStyleDelayed('myElement', 2000);
}

