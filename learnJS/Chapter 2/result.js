// Переменные

let name;
let admin;
name = "Nikita";
admin = name;
alert(admin);

// -----------------------------------

// Взаимодействие: alert, prompt, confirm

let name = prompt("Как зовут?");
alert(name);

// -----------------------------------

// Условное ветвление: if, '?'

let quiz = prompt('Какое "официальное" название JavaScript?', "");
if (quiz == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

let num = prompt("Введите число", 0);
if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}

result = a + b < 4 ? "Мало" : "Много";

let hi =
  login == "Сотрудник"
    ? "Привет"
    : login == "Директор"
    ? "Здравствуйте"
    : login == ""
    ? "Нет логина"
    : "";

// -----------------------------------

// Логические операторы

if (age >= 14 && age <= 90);

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

let name = prompt("Кто там?", "");
if (name === "Админ") {
  let password = prompt("Пароль?", "");
  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === "" || password === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (name === "" || name === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}

// -----------------------------------

// Операторы нулевого слияния и присваивания: '??', '??='
let num1 = 10,
  num2 = 20,
  result;
result ??= num1 ?? num2;

// -----------------------------------

// Циклы while и for

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

let n = 10;
prime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue prime;
  }
  alert(i);
}

// -----------------------------------

// Конструкция "switch"

if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

const num = +prompt("Введите число между 0 и 3", "");
switch (num) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;
}

// -----------------------------------

// Функции

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}

function min(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  let res = x;
  for (let i = 1; i < n; i++) {
    res *= x;
  }
  return res;
}
let x = prompt("x?", "");
let n = prompt("n?", "");
if (n >= 1 && n % 1 == 0) {
  alert(pow(x, n));
} else {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}

// -----------------------------------

// Стрелочные функции, основы

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);
