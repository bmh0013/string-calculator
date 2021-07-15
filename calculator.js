// Accepts a string and returns the calculated value
function calculate(string) {
  if (hasInputErrors(string)) {
    throw new Error("String contains characters that are not parseable");
  }
  // if ( hasSyntaxErrors(string) ) {
  //   throw SyntaxError('Invalid input');
  // }

  result = parseAddition(string);
  result = formatResult(result);

  return result;
}

// Checks to see if any characters in the string contain letters
function hasInputErrors(string) {
  return !!string.match(/[a-z]/i);
}

// Splits the string into groups based on the operator or if inside parentheses
function split(expression, operator) {
  let split = [];

  let strSlice = "";

  let bracketCount = 0;
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char === " ") continue;

    if (char === "(") {
      strSlice += char;
      bracketCount++;
    } else if (char === ")") {
      strSlice += char;
      bracketCount--;
    } else if (char === operator && bracketCount === 0 && strSlice.length) {
      // This deals with negative numbers instead of splitting the string
      if (
        operator === "-" &&
        (strSlice.substr(-1) === "*" ||
          strSlice.substr(-1) === "/" ||
          strSlice.substr(-1) === "+")
      ) {
        strSlice += char;
      } else {
        split.push(strSlice);
        strSlice = "";
      }
    } else {
      strSlice += char;
    }
  }

  if (strSlice.length) {
    split.push(strSlice);
  }

  return split;
}

function parseAddition(string) {
  debugger;
  let addArray = split(string, "+");

  addArray = addArray.map((exp) => {
    if (+exp) {
      return +exp;
    } else {
      return parseSubtraction(exp);
    }
  });

  return addArray.length ? addArray.reduce((a, b) => a + b) : addArray;
}

function parseSubtraction(string) {
  debugger;
  let subArray = split(string, "-");
  subArray = subArray.map((exp) => {
    if (+exp) {
      return +exp;
    } else {
      return parseMultiplication(exp);
    }
  });
  return subArray.length ? subArray.reduce((a, b) => a - b) : subArray;
}

function parseMultiplication(string) {
  debugger;
  let multArray = split(string, "*");
  multArray = multArray.map((exp) => {
    if (+exp) {
      return +exp;
    } else {
      return parseDivision(exp);
    }
  });
  return multArray.length ? multArray.reduce((a, b) => a * b) : multArray;
}

function parseDivision(string) {
  debugger;
  let divArray = split(string, "/");
  divArray = divArray.map((exp) => {
    if (+exp) {
      return +exp;
    } else {
      return parseParentheses(exp);
    }
  });
  return divArray.length ? divArray.reduce((a, b) => a / b) : divArray;
}

function parseParentheses(string) {
  debugger;
  let negative;
  let exp = string.split("");

  for (let i = 0; i < exp.length; i++) {
    if (exp[0] === "-") {
      negative = true;
      exp.splice(i, 1);
    }
    if (exp[i] === "(") {
      exp.splice(i, 1);
      break;
    }
  }
  for (let i = exp.length - 1; i > 0; i--) {
    if (exp[i] === ")") {
      exp.splice(i, 1);
      break;
    }
  }
  exp = exp.join("");

  return negative ? "-" + parseAddition(exp) : parseAddition(exp);
}

function formatResult(num) {
  num = num.toString();

  let repeatNum = num[0];
  let count = 1;
  for (let i = 1; i < num.length; i++) {
    if (num[i] === repeatNum) {
      count++;
      if (count === 3) {
        return +num.substr(0, num.length - i);
      }
    } else {
      repeatNum = num[i];
      count = 1;
    }
  }
  return +num;
}

module.exports = { calculate };
