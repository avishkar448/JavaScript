// 1) reverse each word in sentence

let x = "hello my name is avishkar";
let ans = x.split("").reverse().join("");
console.log(ans);

var str = "I am the ghost of uchiha";
var saveStr = str.split(" ").map((e) => {
  return e.split("").reverse().join("");
});

console.log(saveStr.join(" "));

// 2) check if an object is an array or not

function ArrayOrNot(elem) {
  console.log(Array.isArray(elem));
}

ArrayOrNot([]);
ArrayOrNot({});

// 3) How to empty an array in javascript
var arr = [1, 2, 3, 4, 5, 6];
arr.length = 0;

// 4) how to check number is integer
let a = 12.5;
if (a % 1 === 0) {
  console.log("Integer");
} else {
  console.log("Not integer");
}

// 5) Duplicate
function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5]));
