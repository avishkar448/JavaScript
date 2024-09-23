

function BeacketCheck(exp) {
  let stack = [];

  for (let i = 0; i < exp.length; i++) {
    let x = exp[i];

    if (x == "(" || x == "{" || x == "[") {
      stack.push(x);
      continue;
    }

    if (stack.length == 0) {
      return false;
    }

    let check;
    switch (x) {
      case ")":
        check = stack.pop();
        if (x == "}" || x == "]") {
          return false;
        }
        break;
      case "]":
        check = stack.pop();
        if (x == "}" || x == ")") {
          return false;
        }
        break;
      case "}":
        check = stack.pop();
        if (x == ")" || x == "]") {
          return false;
        }
        break;
    }
  }
  return stack.length == 0;
}

let input = "([{{}}])[";

if(BeacketCheck(input)){ 
    console.log(`${input} it is balence bracket expression`)
}
else{ 
    console.log(`${input} is not balence bracket expression`)
}

