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
