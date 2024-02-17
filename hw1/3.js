"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

let randomDigitsArray = [];

for (let i = 0; i < 5; i++) {
    let randomDigit = Math.floor(Math.random() * 10); 
    randomDigitsArray.push(randomDigit); 
}

console.log(randomDigitsArray); 

let element = randomDigitsArray[0];
for (let i = 0; i < randomDigitsArray.length; i++) {
    element = element + randomDigitsArray[i]
}

console.log('Сумма элементов массива:', element);


const min = Math.min(...randomDigitsArray);
console.log('Минимальное значение в массиве:', min);

const newArr = []
let a = 0;
for (let i = 0; i < randomDigitsArray.length; i++) {
    if (randomDigitsArray[i] == 3) {
        newArr.push(i)
    };
}
console.log('Индексы с числом 3:', newArr);