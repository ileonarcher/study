let a = +prompt("Введите первое слагаемое");
let b = +prompt("Введите второе слагаемое");

alert(a + b);



let a = 6.35;
console.log(Math.round(a * 100) / 100);



function readNumber() {
  let input = prompt("Введите число", 0);
  if (input === "" || input === null) {
    return alert(`Число: ${null}`);
  }
  if (isNaN(+input)) {
    readNumber();
  } else {
    return alert(`Число: ${+input}`);
  }
}

readNumber();



function random(min, max) {
  return (max - min) * Math.random() + min;
}



function randomInteger(min, max) {
  return Math.round((max - min) * Math.random() + min);
}
