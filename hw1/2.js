"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function calcSalary() {
    let sum  =  Number(prompt(`Ввделите сумму зарплаты`))
    if (Number.isFinite(sum) === false) {
        alert(`Значение задано неверно`);
    }
    else {
        alert(`Размер заработной платы за вычетом налогов равен ${sum * 0.87}`);
    }
}
