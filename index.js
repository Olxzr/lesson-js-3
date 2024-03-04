
// Создание объектов с помощью литерала объекта 
// 1 Создайте объект person с полями name, age и job. Присвойте полям значения, например, "John", 25 и "developer" соответственно.

// let person = {
//     name: 'Jhon',
//     age: 25,
//     job: 'developer',
// }

// Изменение свойств объекта

// person.name = 'Alex'
// person["job"] = "Maller"

// console.log(person)

// 2 Создайте объект car с полями brand, model, year и color. Присвойте полям значения, например, "Toyota", "Camry", 2020 и "blue" соответственно.

// let car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     color: 'blue'
// }

// // Добавление новых свойств в объект

// car.fuel = 'petrol';
// car.drive = '4x4'

// console.log(car)


// Создание объекта с использованием конструктора объекта
// 1 Создайте функцию-конструктор Person с параметрами name, age и job. Создайте новый объект с использованием этого конструктора и присвойте значения для полей.

// function person(name, age, job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }
// let person1 = new person('Vladik', 25, 'reseller')

// person1.name = 'Alex'
// person1["job"] = "Maller"

// console.log(person1)



// 2 Создайте функцию-конструктор Car с параметрами brand, model, year и color. Создайте новый объект с использованием этого конструктора и присвойте значения для полей.

// function Car(brand, model, year, color){
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.color = color;
// }
// let car1 = new Car('Lamborghini', 'Urus', 2018, 'black')

// delete car1.year

// console.log(car1)

// Методы объектов
// 1 Создайте объект "person" с свойствами "name", "age" и методом "greet", который выводит на экран приветствие с именем. 

// let person = {
//     name: 'Петросян',
//     age: '18',
//     gret: function(){
//         console.log('Привет ' + this.name + ' вам же всего лишь ' + this.age);
//     }
// }
// person.gret();

// 2 Создайте объект "calculator" с методами "add", "subtract", "multiply" и "divide", которые принимают два аргумента и возвращают результат операции.

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

// 3 Создайте объект "car" с методом "start", который выводит на экран сообщение о том, что машина запущена, и методом "stop", который выводит на экран сообщение о том, что машина остановлена.

// let car = {
//     start: () =>{
//     console.log('машина запущена')
// },
//     stop: () =>{
//     console.log('машина остановлена')
// }
// }
// car.start()



// Прототипы объекта
// 1 Создайте объект-прототип "person" с свойствами "name" и "age". Создайте объект "john" на основе этого прототипа и задайте ему свойства "name" и "age".

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

// 2 Создайте объект-прототип "animal" с методом "eat", который выводит на экран сообщение о том, что животное кушает. Создайте объект "dog" на основе этого прототипа и вызовите метод "eat".

// let animal = {
//     eat: function(){
//         console.log('животное кушает')
//     }
// }

// let dog = Object.create(animal)
// dog.eat()


// 3 Создайте объект-прототип "shape" с методом "draw", который выводит на экран сообщение о том, что фигура рисуется. Создайте объект "rectangle" на основе этого прототипа и вызовите метод "draw"

// let shape = {
//     draw: function(){
//         console.log('фигура рисуется')
//     }
// }

// let rectangle = Object.create(shape)
// rectangle.draw()