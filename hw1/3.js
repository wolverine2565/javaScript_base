"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function maxNum(a,b,c) {
    let maxNummber
    if (a > b && b > c) {
        maxNummber = a;
    } 
    else if (b > a && a > c) {
        maxNummber = b;
    }
    else maxNummber = c;
    return maxNummber;
}

function searchMaxnum() {
    const a = Number(prompt(`Ввдедите первое число`))
    const b = Number(prompt(`Ввдедите второе число`))
    const c = Number(prompt(`Ввдедите третье число`))
    alert(`Максимальное число равно ${maxNum(a,b,c)}`)
}
