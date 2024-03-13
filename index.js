
// ? Создание объектов с помощью литерала объекта 
// ! 1 Создайте объект person с полями name, age и job. Присвойте полям значения, например, "John", 25 и "developer" соответственно.

// let person = {
//     name: 'Jhon',
//     age: 25,
//     job: 'developer',
// }

// Изменение свойств объекта

// person.name = 'Alex'
// person["job"] = "Maller"

// console.log(person)

// ! 2 Создайте объект car с полями brand, model, year и color. Присвойте полям значения, например, "Toyota", "Camry", 2020 и "blue" соответственно.

// let car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     color: 'blue'
// }

// Добавление новых свойств в объект

// car.fuel = 'petrol';
// car.drive = '4x4'

// console.log(car)


// ? Создание объекта с использованием конструктора объекта
// ! 1 Создайте функцию-конструктор Person с параметрами name, age и job. Создайте новый объект с использованием этого конструктора и присвойте значения для полей.

// function person(name, age, job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }
// let person1 = new person('Vladik', 25, 'reseller')

// person1.name = 'Alex'
// person1["job"] = "Maller"

// console.log(person1)



// ! 2 Создайте функцию-конструктор Car с параметрами brand, model, year и color. Создайте новый объект с использованием этого конструктора и присвойте значения для полей.

// function Car(brand, model, year, color){
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.color = color;
// }
// let car1 = new Car('Lamborghini', 'Urus', 2018, 'black')

// delete car1.year

// console.log(car1)

// ? Методы объектов
// ! 1 Создайте объект "person" с свойствами "name", "age" и методом "greet", который выводит на экран приветствие с именем. 

// let person = {
//     name: 'Петросян',
//     age: '18',
//     gret: function(){
//         console.log('Привет ' + this.name + ' вам же всего лишь ' + this.age);
//     }
// }
// person.gret();

// ! 2 Создайте объект "calculator" с методами "add", "subtract", "multiply" и "divide", которые принимают два аргумента и возвращают результат операции.

// const calculator = {
//     add: (one, two) => {
//     console.log(`сколько будет 1 + 2? Ответ  ${one + two}`)
//     },
//     subtract: (Three, four) => {
//     console.log(`сколько будет 3 - 4? Ответ  ${Three - four}`)
//     },
//     multiply: (Five, six) => {
//       console.log(`сколько будет 5 * 6? Ответ  ${Five * six}`)
//     },
//     divide: (eight,two1) => {
//     console.log(`сколько будет 8 / 2? Ответ  ${eight / two1}`)
//     },
// }
// calculator.add(1,2)
// calculator.subtract(3,4)
// calculator.multiply(5,6)
// calculator.divide(8,2)

// ! 3 Создайте объект "car" с методом "start", который выводит на экран сообщение о том, что машина запущена, и методом "stop", который выводит на экран сообщение о том, что машина остановлена.

// let car = {
//     start: () =>{
//     console.log('машина запущена')
// },
//     stop: () =>{
//     console.log('машина остановлена')
// }
// }
// car.start()



// ? Прототипы объекта
// ! 1 Создайте объект-прототип "person" с свойствами "name" и "age". Создайте объект "john" на основе этого прототипа и задайте ему свойства "name" и "age".

// let person = {
//     name: '',
//     age: 0,
//     Sky: function(){
//         console.log('Привет ' + this.name + ',' + ' вам же ' + this.age + '?')
//     }
// }

// let John = Object.create(person)
//     John.name = "Алекса";
//     John.age = 20;
//     John.Sky();

// console.log(Sky)

// ! 2 Создайте объект-прототип "animal" с методом "eat", который выводит на экран сообщение о том, что животное кушает. Создайте объект "dog" на основе этого прототипа и вызовите метод "eat".

// let animal = {
//     eat: function(){
//         console.log('животное кушает')
//     }
// }

// let dog = Object.create(animal)
// dog.eat()


// ! 3 Создайте объект-прототип "shape" с методом "draw", который выводит на экран сообщение о том, что фигура рисуется. Создайте объект "rectangle" на основе этого прототипа и вызовите метод "draw"

// let shape = {
//     draw: function(){
//         console.log('фигура рисуется')
//     }
// }

// let rectangle = Object.create(shape)
// rectangle.draw()




// ? Создание массивов
// ! создайте 4 разных массивов используя все 3 способа которые были показаны в видео.

// const neWmassiv = ["Яблоко", "Апельсин", "Слива"]

// const neWarr = new Array(5)

// let pink = 'розовый'

// const neWarrFrom = Array.from(pink)


// ? Используя методы  push, pop, shift, unshift
// !  Измените ваши массивы удалите что то из массива, добавьте что то в массив

// const names = ['Дартаньян', 'Портос', 'Арамис']

// names.shift()
// names.unshift('Атос')

// names.push('Дартаньян')
// names.push('Тайсон')
// names.pop()

// console.log(names);



// ? slice()
// ! 1 Создайте массив из чисел. Используя метод slice, создайте новый массив, содержащий первые три элемента исходного массива.

// const numbers = [1, 2, 3, 4, 5, 6]
// const newNumbers = numbers.slice(0, 3)

// console.log(newNumbers);



// ! 2 Создайте строку из слов. Используя метод slice, создайте новую строку, содержащую первые три слова исходной строки.

// const string = ['Gudermes', 'Grozny', 'Argun', 'London', 'Madrid', 'Manila']

// const newCity = string.slice(0, 3)

// console.log(newCity.toString());



// ! 3 Создайте массив из строк. Используя метод slice, создайте новый массив, содержащий элементы исходного массива, начиная с третьего элемента и заканчивая пятым.

// const stringsArray = ["яблоко", "груша", "апельсин", "банан", "виноград", "арбуз", "мандарин"]

// const newString = stringsArray.slice(3, 5)

// console.log(newString)



// ! 4 Создайте строку из символов. Используя метод slice, создайте новую строку, содержащую символы исходной строки, начиная со второго символа и заканчивая четвертым.

// const symbols = ['!', '@', '#', '$', '%', '&', '*']
// const newSymbols = symbols.slice(2, 5)

// console.log(newSymbols.toString());



// ! 5 Создайте массив из объектов. Используя метод slice, создайте новый массив, содержащий первые два объекта исходного массива.

// const arr = [
//     { name: 'Alice'},
//     { name: 'Bob'},
//     { name: 'Charlie'}
// ]
// const newArr = arr.slice(0, 2)

// console.log(newArr)



// ? splice()
// ! 1 Создайте массив из чисел. Используя метод splice, удалите первый элемент массива.

// const numbers = [1,2,3,4,5,6]

// numbers.splice(0, 1)

// console.log(numbers)



// ! 2 Создайте строку из слов. Используя метод splice, удалите первое слово строки.

// const water = ['Волга', 'Амур', 'Дон']

// water.splice(0, 1)

// console.log(water)



// ! 3 Создайте массив из строк. Используя метод splice, удалите элемент массива, расположенный на второй позиции.

// const water = ['Волга', 'Амур', 'Дон', 'Днепр', 'Ока', 'Енисей', 'Урал']

// water.splice(2, 1)

// console.log(water)



// ! 4 Создайте строку из символов. Используя метод splice, удалите первые три символа строки.

// const symbols = ['!', '@', '#', '$', '%', '&', '*']

// symbols.splice(0, 3)

// console.log(symbols)



// ! 5 Создайте массив из объектов. Используя метод `splice`, удалите первый объект из массива.

// const arr = [
//     { name: 'Alice'},
//     { name: 'Bob'},
//     { name: 'Charlie'}
// ]

// arr.splice(0, 1)

// console.log(arr);




// ? concat()
// ! 1 Создайте два массива из чисел. Используя метод `concat`, объедините эти массивы в один.

// const numbersONE = [1, 2, 3, 4]
// const numbersTWO = [5, 6, 7, 8]

// const merge = numbersONE.concat(numbersTWO)

// console.log(merge);



// ! 2 Создайте две строки из слов. Используя метод concat, объедините эти строки в одну.

// let men = 'Partos'
// let frend = 'Aramis'

// let merge = men.concat(frend)

// console.log(merge);


// ! 3 Создайте два массива из строк. Используя метод concat, объедините эти массивы в один.

// const cities = ['Москва', 'Новосибирск']
// const district = ['барвиха', 'Ленинский']

// const merge = cities.concat(district)

// console.log(merge);



// ! 4 Создайте две строки из символов. Используя метод concat, объедините эти строки в одну.

// const symbolsONE = ['!', '@', '#']
// const symbolsTWO = ['$', '%', '&', '*']

// const merge = symbolsONE.concat(symbolsTWO)

// console.log(merge);



// !  5 Создайте массив из чисел и строк. Используя метод concat, добавьте к массиву новый элемент – массив из трех чисел.

// const NumbersCities = [1, 2, 3, 4, 'Москва', 'Новосибирск']
// const NewNumbers = [7, 8, 9, 10]

// const merge = NumbersCities.concat(NewNumbers)

// console.log(merge);



//  ? Map()
// ! 1 Создайте массив из чисел. Используя метод `map`, создайте новый массив, в котором каждый элемент будет увеличен на 1

// const numbers = [1,2,3,4,5]

// const NewNumber = numbers.map(function(number){
//     return number + 1
// })
// console.log(NewNumber)



// ! 2 Создайте массив из строк. Используя метод map, создайте новый массив, в котором каждая строка будет записана в верхнем регистре.


// const strings = ['apple', 'banana', 'cherry'];

// const uppercaseStrings = strings.map(function(str){
//     return str.toUpperCase()
// })

// console.log(uppercaseStrings);



// ! 3 Создайте массив из объектов, каждый из которых имеет свойства "name" и "age".
// ! Используя метод map, создайте новый массив, в котором каждый объект будет иметь дополнительное свойство "fullName", содержащее имя и возраст объекта.


// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];
// const Newpeople = people.map(person => ({
    
//     person,fullName: `${person.name} ${person.age} лет`
// }))

// console.log(Newpeople);


// ! 4 Создайте массив из чисел. Используя метод map, создайте новый массив, в котором каждый элемент будет возведен в квадрат.


// const number = [2, 3, 4, 5]

// const SquareNumbers = number.map(function(construction){
//     return construction ** 2
// })

// console.log(SquareNumbers)



// ! 5 Создайте массив из строк. Используя метод map, создайте новый массив, в котором каждая строка будет записана в нижнем регистре.


// const string = ['ПРИОРА', 'СОЛЯРИС', 'ФОРД ФОКУС']

// const lower = string.map(function(newString){
//     return newString.toLowerCase()
// })

// console.log(lower)



// ? filter()
// ! 1 Напишите функцию, которая принимает массив чисел и возвращает только четные числа из этого массива, используя метод filter


// const numbers = [1, 2, 3, 4, 5, 6, 7]

// const newNum = numbers.filter(function(number){
//     return number % 2 === 0
// })

// console.log(newNum);


// ! 2 Напишите функцию, которая принимает массив строк и возвращает только те строки, длина которых больше или равна 5, используя метод filter

// const strings = ['Машина', 'Вертолет', 'Танк', 'Болид', 'Дом', 'Стол', 'Стул']

// const NewStr = strings.filter(function(str){
//     return str.length >= 5
// })

// console.log(NewStr)



// ! 3 Напишите функцию, которая принимает массив объектов и возвращает только те объекты, у которых свойство price больше 1000, используя метод filter


// const Obj = [
//     {name: 'Телефое', price: 800},
//     {name: 'Ноутбук', price: 1100},
//     {name: 'Компютер', price: 1500},
//     {name: 'Принтер', price: 500}
// ]

// const NewObj = Obj.filter(function(Num) {
//     return Num.price > 1000
// })

// console.log(NewObj)




// ? reduce()
// ! 1 Создайте массив из чисел. Используя метод reduce, вычислите сумму всех элементов массива.

// const Numbers = [1, 2, 3, 4, 5];

// const addition = Numbers.reduce(function(accum, curren){
//     return accum + curren
// }, 0)

// console.log(addition);




// ! 2 Создайте массив из строк. Используя метод `reduce`, объедините все строки в одну строку.


// const fruits = ["apple", "orange", "banana"];

// const merge = fruits.reduce(function(accum, curren){
//     return accum + curren
// })

// console.log(merge);



// ! 3 Создайте массив из чисел. Используя метод reduce, вычислите произведение всех элементов массива.


// const Numbers = [1, 2, 3, 4, 5];

// const addition = Numbers.reduce(function(accum, curren){
//     return accum * curren
// })

// console.log(addition);



// ! 4 Создайте массив из объектов, каждый из которых имеет свойства "name" и "age". Используя метод reduce, вычислите средний возраст всех объектов в массиве.


// ? const people = [
// ?     { name: 'Alice', age: 25 },
// ?     { name: 'Bob', age: 30 },
// ?     { name: 'Charlie', age: 35 }
// ? ];

// ? const sum = people.reduce((acc, curren) => acc + curren.age, 0)

// ? const average = sum / people.length;

// ? console.log(average)


// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// const sum = people.reduce(function(acc, curren){
//     return acc + curren.age
// }, 0)

// const average = sum / people.length;

// console.log(average)




// ! 5 Создайте массив из чисел. Используя метод `reduce`, вычислите сумму всех четных элементов массива.


// const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const calculations = Numbers.reduce(function(acc, curren){
//     if(curren % 2 === 0){
//         return acc + curren
//     }else {
//         return acc;
//     }
// }, 0);

// console.log(calculations);




// ? sort()
//! 1 Создайте массив из чисел. Используя метод sort, отсортируйте его по возрастанию.


// const nuM = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// nuM.sort()

// console.log(nuM);



//! 2 Создайте массив из строк. Используя метод sort, отсортируйте его в алфавитном порядке.


// const Name = ['Гилани', 'Адлан', 'Валид', 'Бислан']

// Name.sort()

// console.log(Name);



//! 3 Создайте массив из объектов, каждый из которых имеет свойства "name" и "age". Используя метод sort, отсортируйте массив по возрастанию возраста объектов.


// const people = [
//     { name: 'Alice', age: 18 },
//     { name: 'Bob', age: 13 },
//     { name: 'Charlie', age: 25 }
// ];

// const neWpeople = people.sort(function(a, b){
//     return  a.age - b.age
// })

// console.log(neWpeople);



//! 4 Создайте массив из чисел. Используя метод sort, отсортируйте его по убыванию.


// const nuM = [1,2,3,4,5,6,7,8,9];

// const neWnuM = nuM.sort(function(a, b){
//     return b - a 
// })
// console.log(neWnuM);



//! 5 Создайте массив из строк. Используя метод sort, отсортируйте его в обратном алфавитном порядке.


// const Name = ['Гилани', 'Адлан', 'Валид', 'Бислан'];

// const NewName = Name.sort(function(a, b){
//     return b.localeCompare(a)
// });

// console.log(NewName);





// ? forEach()
// ! 1 Создайте массив из чисел. Используя метод `forEach`, выведите каждый элемент массива в консоль.


// const nuM = [1,2,3,4,5,6,7,8,9,10];

// nuM.forEach(function(number){
//     console.log(number);
// })



// ! 2 Создайте массив из строк. Используя метод forEach, выведите каждую строку массива в консоль.


// const Name = ['Гилани', 'Адлан', 'Валид', 'Бислан'];

// Name.forEach(function(Names){
//     console.log(Names);
// })


// ! 3 Создайте массив из объектов, каждый из которых имеет свойства "name" и "age". Используя метод forEach, выведите в консоль имя и возраст каждого объекта в массиве.


// const people = [
//     { name: 'Alice', age: 18 },
//     { name: 'Bob', age: 13 },
//     { name: 'Charlie', age: 25 }
// ];

// people.forEach(function(Newpeople){
//     console.log(Newpeople);
// })

// ? 2-й метод

// const people = [
//     { name: 'Alice', age: 18 },
//     { name: 'Bob', age: 13 },
//     { name: 'Charlie', age: 25 }
// ];

// people.forEach(function(person){
//     console.log(`Имя ${person.name} ${person.age} лет`);
// })


// ! 4 Создайте массив из чисел. Используя метод forEach, выведите в консоль сумму всех элементов массива.


// const nuM = [1,2,3,4,5,6,7,8,9,10];

// let sum = 0;

// nuM.forEach(function(numbers){
//     sum += numbers
// })
// console.log(sum);


// ! 5 Создайте массив из строк. Используя метод forEach, выведите в консоль количество символов в каждой строке массива.


// const fruits = ["apple", "orange", "banana"];

// fruits.forEach(function(simVol){
//     console.log(`${simVol} ${simVol.length}`);
// })




// ? find()
// ! 1 Создайте массив из чисел. Используя метод `find`, найдите первый элемент массива, который больше 10.


// const num = [8,9,10,15,17,1,418,15,85];

// const NewOne = num.find(function(number){
//     return number > 10
// })
// console.log(NewOne);



// ! 2 Создайте массив из строк. Используя метод find, найдите первую строку массива, которая содержит букву "a"


// const fruits = ["apple", "orange", "banana"];

// const Newfruits = fruits.find(function(fruit){
//     return fruit.includes('a')
// })
// console.log(Newfruits);


// ! 3 Создайте массив из объектов, каждый из которых имеет свойства "name" и "age". Используя метод find, найдите первый объект в массиве, у которого возраст больше 30


// const people = [
//     { name: 'Alice', age: 18 },
//     { name: 'Bob', age: 31 },
//     { name: 'Charlie', age: 25 }
// ];

// const Newpeople = people.find(function(agepeopl){
//     return agepeopl.age > 30
// })
// console.log(Newpeople)


// ! 4 Создайте массив из чисел. Используя метод find, найдите первый элемент массива, который является четным.


// const num = [8,9,10,15,17,1,418,15,85];

// const newnum = num.find(number => number % 2 === 0)

// console.log(newnum)



// ! 5. Создайте массив из строк. Используя метод `find`, найдите первую строку массива, которая начинается с буквы "a".


// const fruits = ["apple", "orange", "banana"];

// const Arrayfruits = fruits.find(function(fru){
//     return fru.startsWith('a')
// })
// console.log(Arrayfruits);