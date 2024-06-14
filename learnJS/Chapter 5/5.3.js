// function ucFirst (str) {
//     return str = str[0].toUpperCase() + str.slice(1)
// }

// function checkSpam(str) {
//   if (
//     str.toLowerCase().includes("viagra") ||
//     str.toLowerCase().includes("xxx")
//   ) {
//     return true;
//   }
//   return false;
// }

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + "...";
//   } else return str;
// }

function extractCurrencyValue(str) {
  return parseInt(str.slice(1));
}
