let b = -1;
let a = {
  abra: "kadabra",
  toString() {
    return b++;
  },
};
console.log(String(a < 0) + String(a < 0));
