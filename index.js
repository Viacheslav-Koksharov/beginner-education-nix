// Практика JS 1.
// Создайте переменную с помощью camelCase, snake_case и PascalCase 
// и присвойте им значения от 0 - я до 2 - х.Выведите значения этих переменных 
// на экран с помощью метода alert и console.log.Скажите,
// чем кардинально отличается alert и console.log ?

// const variableStyle = 0;
// const variable_style = 1;
// const VariableStyle = 2;
// alert(`${variableStyle}, ${variable_style}, ${VariableStyle}`);
// console.log(variableStyle, variable_style, VariableStyle);


// Практика JS 2.
// Дана строка str = 'HTML'.
// Примените к ней определенный метод строк, чтобы все буквы стали маленькими.
// Выведите результат в консоль.Если есть затруднения, посмотрите,
// что такое методы у строк.

// const str = 'HTML'.toLowerCase();
// console.log(str);


// Практика JS 3.
// Спросите имя пользователя с помощью метода prompt.
// Выведите с помощью alert сообщение 'Ваше имя {имя}'.

// let message = prompt('Введите ваше имя');
// if (message === null || message === '') {
//     alert((message = 'Отменено пользователем'));
// } else {
//     alert((message = `ваше имя ${message}`));
// }


// Практика JS 4.
// Дан массив['Саша', 'Петя', 'Оксана'], сделайте из него['Оксанa', 'Олег', 'Саша'].
// Реализуйте эту задачу, двумя способами.В первом исходный массив должен быть изменен,
// во втором - не должен быть изменен.

// const arr = ['Саша', 'Петя', 'Оксана'];
// arr.splice(1, 2);
// arr.splice(0, 0, 'Оксанa', 'Олег',);
// console.log(arr);

// const newArr = [];
// newArr.push('Оксанa', 'Олег', arr[0]);
// console.log(newArr);


// Практика JS 5.
// Напишите скрипт, который принимает с клавиатуры 2 числа, и если первое больше второго,
// то выводит на экран их сумму, если же наоборот - произведение.
// Если числа одинаковые, выводит на экран 'числа одинаковые'.

// function getScript(a, b) {
//     if (a > b) {
//         return a + b;
//     }
//     if (a < b) {
//         return a * b;
//     }
//     if (a = b) {
//         return 'числа одинаковые';
//     }
// }
// console.log(getScript(10, 5));
// console.log(getScript(5, 10));
// console.log(getScript(10, 10));


// Практика JS 6.
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// const arr = [10, 20, 30, 50, 235, 3000];
// const condition = ['1', '2', '5'];
// const newArr = arr.filter(el => condition.includes(el.toString()[0]));
// console.log(newArr);


// Практика JS 7.
// Вес записан в переменную weight.Рекомендацию записывай строкой в переменную recommendation.
// Если вес до 4 кг(не включая это значение), рекомендация – 'Пора перекусить'.
// Если вес от 4 кг включительно до 5.5 кг включительно – 'Вес в норме'.
// Если вес больше 5.5 кг – 'Пора на тренировку'.
// В качестве условий, используй значения weight 1, 3, 4, 5, 10. Рекомендацию выводи в консоль.

// let weight = 2;
// let recommendation;
// switch (recommendation) {
//     case recommendation = 'Пора перекусить':
//         weight < 4;
//         break;

//     case recommendation = 'Вес в норме':
//         weight >= 4 && weight <= 5.5;
//         break;

//     case recommendation = 'Пора на тренировку':
//         weight > 5.5;
//         break;
// }
// console.log(recommendation);


// Практика JS 8.
// Напишите функцию, которая вычисляет итоговую оценку студента в зависимости от двух параметров: 
// оценки за экзамен и количества выполненных проектов.Ваша функция должна принимать два аргумента: 
// экзамен - оценка за экзамен(от 0 до 100); проекты - количество реализованных проектов(от 0 и выше); 
// Эта функция должна возвращать число(итоговая оценка).Есть четыре типа итоговых оценок:
// 100, если оценка за экзамен больше 90 или количество выполненных проектов больше 10.
// 90, если оценка за экзамен больше 75 или количество выполненных проектов не менее 5.
// 75, если оценка за экзамен больше 50 или количество выполненных проектов не менее 2.
// 0, в остальных случаях

// function finalGrade(point, project) {
//     let total;
//     if (point > 90 || project > 10) {
//         return total = 100
//     } else if (point > 75 || project >= 5) {
//         return total = 90
//     } else if (point > 50 && project >= 2) {
//         return total = 75
//     } else { return total = 0 }
// }
// console.log(finalGrade(100, 12)) //=> 100
// console.log(finalGrade(99, 0)) //=> 100
// console.log(finalGrade(10, 15)) //=> 100
// console.log(finalGrade(85, 5)) //=> 90
// console.log(finalGrade(55, 3))//=> 75
// console.log(finalGrade(55, 0)) //=> 0
// console.log(finalGrade(20, 2))//=> 0


// Практика JS 9.
// Напишите функцию, которая принимает в себя массив,
// а возвращает произведение элементов массива, 
// умноженных по порядку друг на друга.

// function example(arr) {
//     const summ = arr.reduce((acc, value) => acc * value, 1);
//     return summ;
// }
// console.log(example([1, 2, 3, 4])); //=> 1 * 2 * 3 * 4 = 24


// Практика JS 10.
// Напишите функцию, которая будет принимать в себя массив c именами,
// и возвращать массив, но уже с удаленными нежелательными именами.
// Массив с нежелательными именами должен быть внутри 
// вашей функции: const unwantedNames = [“Дима”, “Саша”, ”Ольга”, ‘Никита”].

// function example(array) {
//     const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
//     const wantedNames = [];
//     for (let i = 0; i < array.length; i += 1) {
//         if (!unwantedNames.includes(array[i])) {
//             wantedNames.push(array[i]);
//         }
//     }
//     return wantedNames;
// }
// console.log(example(['Никита', 'Саша', 'Анастасия', 'Дима', 'Саныч', 'Ольга',])) //=> [Анастасия','Саныч']
// console.log(example(['Алексей', 'Семён', 'Василиса', 'Дима', 'Максим', 'Ольга',])) //=> ['Алексей', 'Семён', 'Василиса', 'Максим']
// console.log(example(['Алишер', 'Ольга',])) //=> ['Алишер']


// Практика JS 11.
// В этом упражнении должны написать программу, которая будет принимать в качестве параметров два массива целых чисел.
// Необходимо найти произведение каждого массива, после чего найти разность двух массивов,
// вне зависимости, какой из них больше.Если напишите решение в одну строчку, будете молодцы.


// function example(arr1, arr2) {
//     const summ = arr1.reduce((acc, value) => acc * value, 1) - arr2.reduce((acc, value) => acc * value, 1);
//     return summ;
// }
// console.log(example([3, 2, 5], [1, 4, 4])) //=> 14
// console.log(example([9, 7, 2], [5, 2, 2])) //=> 106
// console.log(example([11, 2, 5], [1, 10, 8])) //=> 30
// console.log(example([4, 4, 7], [3, 9, 3])) //=> 31
// console.log(example([15, 20, 25], [10, 30, 25])) //=> 0


// Практика JS 12.
// Завершите функцию, которая принимает два целых числа(a, b, где a < b)
//  и возвращает массив всех целых чисел между входными параметрами, включая их.

// function between(a, b) {
//     const arr = [];
//     for (let i = a; i <= b; i += 1) {
//         arr.push(i);
//     }
//     return arr
// }
// console.log(between(1, 4)) //=> [1, 2, 3, 4]
// console.log(between(-2, 2)) //=> [-2, -1, 0, 1, 2]
// console.log(between(20, 25)) //=> [20, 21, 22, 23, 24, 25]


// Практика JS 13.
// Напишите функцию, которая преобразует шестнадцатеричное число(заданное в виде строки) в десятичное число.
// function hexToDec(str) {
//     const num = parseInt(str, 16);
//     return num
// }
// console.log(hexToDec('1')) //=> 1
// console.log(hexToDec('a')) //=> 10
// console.log(hexToDec('10')) //=> 16
// console.log(hexToDec('FF')) //=> 255
// console.log(hexToDec('-C')) //=> 12


// Практика JS 14.
// Удалите n восклицательных знаков в предложении слева направо.n - положительное целое число.
// const remove = (s, n) => s.replace(/\!/g, _ => n && n-- ? '' : _);

// console.log(remove("Hi!", 1)) //=> "Hi"
// console.log(remove("Hi!", 100)) //=> "Hi"
// console.log(remove("Hi!!!", 1)) //=> "Hi!!"
// console.log(remove("Hi!!!", 100)) //=> "Hi"
// console.log(remove("!Hi", 1)) //=> "Hi"
// console.log(remove("!Hi!", 1)) //=> "Hi!"
// console.log(remove("!Hi!", 100)) //=> "Hi"
// console.log(remove("!!!Hi !!hi!!! !hi", 1)) //=> "!!Hi !!hi!!! !hi"
// console.log(remove("!!!Hi !!hi!!! !hi", 3)) //=> "Hi !!hi!!! !hi"
// console.log(remove("!!!Hi !!hi!!! !hi", 5)) //=> "Hi hi!!! !hi"
// console.log(remove("!!!Hi !!hi!!! !hi", 100)) //=> "Hi hi hi"


// Практика JS 15.
// Вы должны реализовать функцию, которая возвращает разницу между наибольшим 
// и наименьшим значением в списке, полученном в качестве аргумента функции.
// Массив, который получает функция в качестве аргумента, может содержать положительные и отрицательные числа.
// Если массив пуст или имеет одно значение, верните ноль.Изначально, массив будет подан в неотсортированном виде.
// Пример: maxDiff([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7

// function maxDiff(arr) {
//     let total = 0;
//     arr.sort((a, b) => a - b)
//     if (arr.length >= 2) {
//         for (let i = 0; i < arr.length; i += 1) {
//             let min = arr[0];
//             let max = arr[arr.length - 1];
//             total = max - min;
//             return total;
//         }
//     } else { return 0 }
// }
// console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])) //=> 6
// console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])) //=> 11
// console.log(maxDiff([0, 1, 2, 3, 4, 5, 16])) //=> 16
// console.log(maxDiff([16])) //=> 0
// console.log(maxDiff([])) //=> 0


// Практика JS 16.
// Напишите функцию, которая принимает в себя строку и число.
// Верните, в виде массива, только те слова, длинна которых превышает число.

// function example(str, n) {
//     const arr = str.split(' ');
//     const newArr = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i].length > n) {
//             newArr.push(arr[i])
//         }
//     } 
// return newArr
// }
// console.log(example('Сегодня отличный день. С самого утра мы пойдем на озеро, купаться.', 5)) //=> ['Сегодня', 'Отличный', 'самого', 'пойдем', 'купаться']
// console.log(example('Над городом облака, коридоры, берега, проспект, река.', 7)) //=> ['коридоры', 'проспект']


// Практика JS 17.
// Уловка, которую я изучил в начальной школе, чтобы определить, делится ли число на три,
// состоит в том, чтобы сложить все целые числа в числе и разделить полученную сумму на три.
// Если от деления суммы на три нет остатка, то исходное число также делится на три.
// Учитывая серию цифр в виде строки, определите, делится ли число, представленное строкой, на три.
// Примечание: Старайтесь избегать использования оператора % (остаток от деления).
// Число, которое будет принимать в себя функция - всегда будет строка.

// function divisibleByThree(str) {
//     const arr = str.split('');
//     let total = 0;
//     for (let i = 0; i < arr.length; i += 1) {
//         total += Number(arr[i])
//     }
//     const res = total / 3 - ~~(total / 3);
//     return res === 0 ? true : false;
// }
// console.log(divisibleByThree('123')) //=> true
// console.log(divisibleByThree('19254')) //=> true
// console.log(divisibleByThree('88')) //=> false
// console.log(divisibleByThree('1')) //=> false


// Практика JS 18.
// Никаких разговоров.Никаких объяснений.Только ТЗ и результат, который должен быть.
// Посмотрите, что должно получиться на выходе и напишите эту функцию.

// function spacey(arr) {
//     const newArr = [];
//     let total = '';
//     for (let i = 0; i < arr.length; i += 1) {
//         newArr.push(total += arr[i]);
//     }
//     return newArr;
// }
// console.log(spacey(['kevin', 'has', 'no', 'space'])) //=> ['kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
// console.log(spacey(['this', 'cheese', 'has', 'no', 'holes'])) //=> ['this', 'thischeese', 'thischeesehas', 'thischeesehasno', 'thischeesehasnoholes']


// Практика JS 19.
// Если число четное, преобразуйте его в двоичное.Если число нечетное, преобразуйте его в шестнадцатеричное.

// function evensAndOdds(n) {
//     let num = '';
//     if (n % 2 === 0) {
//         num = n.toString(2);
//     } else {
//         num = n.toString(16);
//     }
//     return num
// }
// console.log(evensAndOdds(2)) //=> '10'
// console.log(evensAndOdds(13)) //=> 'd'


// Практика JS 20.
// Необходимо реализовать функцию, которая на входе принимает массив с разными типами данных ==> ['a', 1, 2, false, 'b'],
// а возвращает объект, в котором эти типы данных рассортированны по ключам.

// function sortArr(arr) {
//     const obj = {
//         number: [],
//         string: [],
//         boolean: []
//     }
//     for (let i = 0; i < arr.length; i += 1) {
//         switch (typeof arr[i]) {
//             case 'number':
//                 obj.number.push(arr[i])
//                 break;
//             case 'string':
//                 obj.string.push(arr[i])
//                 break;
//             case 'boolean':
//                 obj.boolean.push(arr[i])
//                 break;
//             default:
//                 break;
//         }
//     }
//     return obj;
// }

// console.log(sortArr(['a', 1, 2, false, 'b']));
// {
//  number: [1, 2],
//  string: ['a', 'b'],
//  boolean: [false]
// }


// Практика JS 21.
// Дана строка, состоящяя из букв a, b, c.Ваша задача поменять расположение букв a и b, но не трогать c.

// function switcheroo(str) {
//     const arr = str.split('')
//     for (let i = 0; i < arr.length; i += 1) {
//         switch (arr[i]) {
//             case 'a':
//                 arr[i] = 'b'
//                 break;
//             case 'b':
//                 arr[i] = 'a'
//                 break;
//             default:
//                 break;
//         }
//     }
//     return arr.join('')
// }
// console.log(switcheroo('abc')) //=> 'bac'
// console.log(switcheroo('aaabcccbaaa')) //=> 'bbbacccabbb'
// console.log(switcheroo('ccccc')) //=> 'ccccc'
// console.log(switcheroo('acb')) //=> 'bca'
// console.log(switcheroo('aabacbaa')) //=> 'bbabcabb'
