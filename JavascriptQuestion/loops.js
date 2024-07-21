// 1) loop an array and add all members of it

function addArray() {
  let a = [1, 2, 3, 4, 5, 6];
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  console.log(sum);
}

addArray();

//in an array of number and string only add those member which are not string

function addOnlyNumber() {
  let x = [12, "xyz", 8, 4, 1, "rrr", "world"];
  sum = 0;
  let result = x.forEach((ele) => {
    if (typeof ele === "number") {
      sum += ele;
    }
    return sum;
  });
  console.log(sum);
}
addOnlyNumber();

//loop an array of object and remove all objects which dont have genders value male

let y = [
  {
    name: "Avishkar",
    gender: "male",
  },
  {
    name: "starlight",
    gender: "female",
  },
  {
    name: "Mangal",
    gender: "female",
  },
  {
    name: "Ashok",
    gender: "male",
  },
];

let result = [];

for (let i = 0; i < y.length; i++) {
  if (y[i].gender === "male") {
    // result += x[i]
    result.push(y[i]);
  }
}

console.log(result);

y.filter((ele) => {
  return ele.gender === "male";
});

//clone an array
function cloneArray(arr) {
  return [...arr];
}

function cloneArr(arr) {
  let newArray = [];
  arr.forEach((e) => {
    newArray.push(e);
  });
  console.log(newArray);
}

function arrMap(arr) {
  let x = arr.map((e) => {
    return e;
  });
  console.log(x);
}

arrMap([1, 2, 23, 4, 5]);

console.log(cloneArray([1, 2, 3, 4, 5]));

cloneArr([2, 4, 6, 8, 10]);

//accept argument and return the type

function typeRet(arg) {
  return typeof arg;
}

console.log(typeRet([]));

//write javascript function to get first element of array

function retrive(arr, n = 1) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log(
      `elements demand high their are only ${arr.length} elements in array`
    );
  }
}

function retrivelast(arr, n = 3) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[arr.length - 1 - i]);
    }
  } else {
    console.log(
      `elements demand high their are only ${arr.length} elements in array`
    );
  }
}

retrive([1, 2, 3, 4, 5, 6], 10);
retrivelast([1, 2, 3, 4, 5, 6], 3);

// let x=[1,2,3,4,5,6,7]
// console.log(x.length)

//frequent array
function freq(arr) {
  let occ = {};
  arr.forEach((element) => {
    if (occ.hasOwnProperty(element)) occ[element]++;
    else occ[element] = 1;
  });

  console.log(Object.values(occ));

  let z = Object.values(occ).reduce((acc, num) => {
    return occ[acc] > occ[num] ? acc : num;
  });

  let ans = Object.keys(occ).reduce((acc, num) => {
    return occ[acc] > occ[num] ? acc : num;
  });

  console.log(ans);
}

freq([1, 2, 3, 4, 5, 6, 1, 5, 3, 4, 7, 8, 1, 2, 1, 1, 4]);

//javascript to shuffle an array
function shuffleArray(arr) {
  let totalShuffle = arr.length;

  while (totalShuffle > 0) {
    totalShuffle--;
    let x = Math.floor(Math.random() * totalShuffle);
    let temp = arr[totalShuffle];
    arr[totalShuffle] = arr[x];
    arr[x] = temp;
  }
  return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Union
function union(arr1, arr2) {
  console.log(...new Set(arr1.concat(arr2)));
}

union([1, 2, 3, 4], [2, 5, 1, 8]);

//Destructing ES6
let x = ["Apple", "bannana", "chiku", "Thala", "c", "s", "z"];
let [a, b, ...c] = x;

console.log(a);
console.log(b);
console.log(c);
