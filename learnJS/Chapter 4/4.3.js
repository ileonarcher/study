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