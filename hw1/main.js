

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