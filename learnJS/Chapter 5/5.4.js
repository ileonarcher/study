let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[1] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);



function sumInput() {
  let arr = [];
  let num = prompt("Введите число");
  while (num != null) {
    arr.push(+num);
    num = prompt("Введите еще число");
  }
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }
  return sum;
}



function elSum(arr, start, finish) {
  let result = 0;
  for (let i = start; i < finish + 1; i++) {
    result += arr[i];
  }
  return result;
}

function coutArrMaker(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = [];
    for (let n = 0; n < arr.length - i; n++) {
      let countArrElement = elSum(arr, i, arr.length - 1 - n);
      result[i].push(countArrElement);
    }
  }
  return result;
}

function arrMax(arr) {
  let res = arr[0];
  for (el of arr) {
    if (res < el) {
      res = el;
    }
  }
  return res;
}

function getMaxSubSum(arr) {
  let countArr = coutArrMaker(arr);
  for (let i = 0; i < countArr.length; i++) {
    countArr[i] = arrMax(countArr[i]);
  }
  let total = arrMax(countArr);
  return total > 0 ? total : 0;
}

console.log(getMaxSubSum([-1, 12, 3, -9, 11]));
