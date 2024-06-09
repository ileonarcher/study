let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;



function isEmpty(object) {
  let res;
  for (let key in object) {
    res = key;
  }
  return res === undefined ? true : false;
}




let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumObject(object) {
  let res = 0;
  for (let key in object) {
    res += +object[key];
  }
  return res;
}




let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(object) {
  for (let key in object) {
    if (typeof object[key] === "number") {
      object[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
