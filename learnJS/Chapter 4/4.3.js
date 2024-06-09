let ob = {};
function A() {
  return ob;
}
function B() {
  return ob;
}
let a = new A();
let b = new B();
console.log(a == b);




function Calculator() {
  this.read = function () {
    this.a = +prompt("Введите первое число");
    this.b = +prompt("Введите второе число");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());




function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    let a = +prompt("Enter num");
    return (this.value += a);
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);




function newOrder(name) {
  this.name = name;
  this.lockStatus = 0;
  this.check = {};
  this.addItem = function (item, count) {
    if (this.lockStatus == 1) {
      return console.log("Функция заблокирована");
    }
    if (this.check[item.name]) {
      this.check[item.name].qty += count;
    } else {
      this.check[item.name] = {
        price: item.price,
        qty: count,
      };
    }
  };
  this.removeItem = function (item, count = this.check[item.name].qty) {
    if (this.lockStatus == 1) {
      return console.log("Функция заблокирована");
    }
    if (this.check[item.name].qty < count) {
      console.log("Убираете больше чем есть");
    } else {
      this.check[item.name].qty -= count;
    }
  };
  this.getCheck = function () {
    let sum = 0;
    for (key in this.check) {
      console.log(
        `${key} - цена: ${this.check[key].price}, количество: ${
          this.check[key].qty
        }, сумма: ${this.check[key].price * this.check[key].qty}`
      );
      sum += this.check[key].price * this.check[key].qty;
    }
    console.log(`--------------------------------------- \nИтого: ${sum}`);
  };
  this.lockOrder = function () {
    this.lockStatus = 1;
  };
  this.unlockOrder = function () {
    this.lockStatus = 0;
  };
}