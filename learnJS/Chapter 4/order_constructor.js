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