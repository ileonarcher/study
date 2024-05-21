// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;



// function isEmpty (object) {
//   let res;
//   for (let key in object) {
//     res = key;
//   }
//   return res === undefined ? true : false;
// }



// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// }



// function sumObject(object) {
//   let res = 0;
//   for (let key in object) {
//     res += +object[key];
//   }
//   return res;
// }



// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };



// function multiplyNumeric(object) {
//   for (let key in object) {
//     if (typeof object[key] === 'number') {
//       object[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu)



// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = structuredClone(user)



// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman
//   }
// }

// let family = marry({
//   name: "John"
// }, {
//   name: "Ann"
// });

// delete family.father;
// delete family.mother.husband;

// console.log(family)



// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () => console.log(this.firstName);
//     arrow();
//   }
// };

// let arrow = () => console.log(this.firstName);
// user.sayHi = arrow;



// let a = {
//   firstName: 'Nik',
//   user: user,
// }

// a.user.sayHi();
// Получается, что в стрелочной функции this работает только, если стрелочная функция помещена в другую функцию. Зачем это нужно?
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// let calculator = {
//   read() {
//     this.a = +prompt('Введите первое число')
//     this.b = +prompt('Введите второе число')
//   },
//   sum() {
//     return this.a + this.b
//   },
//   mul() {
//     return this.a * this.b
//   }
// };

// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );



// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let a = {
//   name: "Mark",
//   makeUser() {
//     return {
//       name: "John",
//       ref: this,
//     };
//   },
// };

// let user = a.makeUser();

// console.log(user);



//-----------------------------
// Конструкторы

// let user = new function() {
//   this.name = "John";
//   this.isAdmin = false;

//   // ...другой код для создания пользователя
//   // возможна любая сложная логика и инструкции
//   // локальные переменные и так далее
// };



// let ob = {};
// function A() {
//   return ob;
// }
// function B() {
//   return ob;
// }
// let a = new A();
// let b = new B();
// console.log( a == b );



// function Calculator() {
//   this.read = function() {
//     this.a = +prompt('Введите первое число')
//     this.b = +prompt('Введите второе число')
//   };
//   this.sum = function() {
//     return this.a + this.b
//   };
//   this.mul = function() {
//     return this.a * this.b
//   }
// }
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );



// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     let a = +prompt('Enter num');
//     return this.value += a;
//   };
// }


let user = {};
console.log(user.map?.());