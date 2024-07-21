//write a javascript function to reverse a number

function reverseNumber(num) {
  //    let x= num.toString()
  //    let revNum
  //    for(let i= x.length -1 ; i>= 0;i--){
  //     revNum=x[i]
  //     revNum.split()
  //     console.log(parseInt(revNum))
  //    }
  return Number(num.toString().split("").reverse().join(""));
}

console.log(reverseNumber(785));

function reverseNum(num) {
  var rev = 0;
  while (num > 0) {
    var rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  console.log(`Reverse number is ${rev}`);
}

reverseNum(123456);

// 2) String palindrom
function isPalindrom(str) {
  let reversed = str.split("").reverse().join("");
  return reversed === str;
}
console.log(isPalindrom("123"));
console.log(isPalindrom("121"));

// 3) alphabetical order
function alphabeticalOrder(str) {
  let result = str.split("").sort().join("");
  return result;
}

console.log(alphabeticalOrder("avishkar"));

// 5) First letter uppercase
function firstUpper(str) {
  let result = str[0].toUpperCase() + str.slice(1);
  return result;
}
console.log(firstUpper("avishkar"));

function capitalize(str) {
  let result = str.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return result.join(" ");
}

console.log(capitalize("my name is avishkar"));

// occurence
function NumberOfOccurance(str) {
  let occ = {};
  str
    .toLowerCase()
    .split("")
    .forEach((element) => {
      if (occ.hasOwnProperty(element) === false) {
        occ[element] = 1;
      } else {
        occ[element]++;
      }
    });

  return occ;
}

console.log(NumberOfOccurance("Avishkar"));
