//lexical scope
function outerScope() {
  let name = "Deadpool";
  function innerScope() {
    let x = "Deadpool two ";
    console.log("inner ", name);
  }
  console.log();
  function innerTwo() {
    // console.log(x); //  cannot access the value of another function
    console.log(name); // access from outer function
  }
  innerScope();
  innerTwo();
}
outerScope();

//clouser
function makeFun() {
  const name = "Avishkar";
  function displayName() {
    console.log(name);
  }
  return displayName; // whole lexical scope return
}

const myFun = makeFun();
myFun();

//example of clouser
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1

/// example
function f(x) {
  x = "x-" + x;
  return function (y) {
    y = "y-" + x;
    return function (z) {
      return "z-" + y;
    };
  };
}

let g = f("a")("b")("c");
console.log(g);

