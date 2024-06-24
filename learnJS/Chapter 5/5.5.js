function camelize(str) {
  let arr = str.split("-");
  let res = arr.reduce(
    (acc, item) => acc + item[0].toUpperCase() + item.slice(1)
  );
  return res;
}

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b).toString();
}

function filterRangeInPlace(arr, a, b) {
  let newArr = arr.filter((item) => item >= a && item <= b);
  console.log(newArr);
  arr.length = 0;
  arr.push(...newArr);
}

function reverceSort(arr) {
  arr.sort((a, b) => b - a);
}

function copySorted(arr) {
  let newArr = [];
  newArr.push(...arr);
  return newArr.sort((a, b) => a.localeCompare(b));
}

function Calculator() {
  (this.calculate = function (str) {
    let action = str.split(" ");
    let a = Number(action[0]);
    let b = Number(action[2]);
    return this[action[1]](a, b);
  }),
    (this["+"] = (a, b) => a + b),
    (this["-"] = (a, b) => a - b),
    (this.addMethod = function (operator, func) {
      this[operator] = func;
    });
}

let names = users.reduce((acc, item) => {
  acc.push(item.name);
  return acc;
}, []);

let usersMapped = users.map((item) => {
  return { fullName: `${item.name} ${item.surname}`, id: item.id };
});

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

function shuffle(array) {
  array.sort((a, b) => Math.random() - 0.5);
}

function getAverageAge(users) {
  return users.reduce((acc, item, index, arr) => {
    if (index == arr.length - 1) {
      return (acc + item.age) / arr.length;
    }
    console.log((acc + item.age) / arr.length);
    return acc + item.age;
  }, 0);
}

function unique(arr) {
  let res = [];
  return arr.filter((item) => {
    if (res.includes(item)) {
      return false;
    } else {
      res.push(item);
      return true;
    }
  });
}

function groupById(arr) {
  return arr.reduce((acc, item) => {
    acc[item.id] = {
      id: item.id,
      name: item.name,
      age: item.age,
    };
    return acc;
  }, {});
}