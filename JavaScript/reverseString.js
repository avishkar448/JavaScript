let x = "Avishkar";
const a = x.split("").reverse().join("");
console.log(a);

function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

const r = reverseString(x);
console.log("Reverse :", r);
