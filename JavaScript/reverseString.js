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


const y="Hello World!";
const res=y.split("").reverse().join("");
console.log(res)

let rev=""
for(let i=y.length-1;i>=0;i--){ 
    rev+=y[i];
}
console.log(rev)