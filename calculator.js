// Accepts a string and returns the calculated value
function calculate(string) {
  string = string.replace(/\s+/g, '');

  if (hasInputErrors(string)) {
    throw new Error("String contains characters that are not parseable");
  }
  if (hasSyntaxErrors(string)) {
    throw SyntaxError("Invalid input.");
  }
  if (hasDecimalErrors(string)) {
    throw SyntaxError("Invalid input. Check string for decimal places for errors");
  }

  const result = parseAddition(string);

  return formatResult(result);
}

// Checks if any of the characters in the string are letters
function hasInputErrors(string) {
  return !!string.match(/[a-z]/i);
}

// Checks parentheses and operators for syntax errors
function hasSyntaxErrors(string) {
  const parenTracker = [];
  let operatorCount = 0;
  let lastCharWasOperator = false;

  for (const char of string) {
    if (char === "(") {
      parenTracker.push("(");
    } else if (char === ")") {
      if (parenTracker.pop() !== "(") return true;
    } else if ( isNaN(+char) && char !== '.' ) {
      if ( lastCharWasOperator ) {
        if (char === "*" || char === "/" || char === "+") return true;
      }
      operatorCount++;
      lastCharWasOperator = true;
      if ( operatorCount === 3 ) return true;
    } else {
      operatorCount = 0;
      lastCharWasOperator = false;
    }
  }

  return parenTracker.length !== 0;
}

// Decimals have lots of special cases so it needs its own function check
function hasDecimalErrors(string) {
  if (string[0] === '.' && isNaN(+string[1]) ) return true;

  let decimalCount = 0;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if ( char === '(' && decimalCount) {
      return true;
    } else if (char === '+' || char === '-' || char === '*' || char === '/') {
      decimalCount = 0;
    } else if (char === '.') {
      if (i >= 1) {
        // Decimal needs to have a number on at least one side
        if ( isNaN(+string[i-1]) && isNaN(+string[i+1]) ) {
          return true;
        }
      }

      decimalCount++;
    }

    if (decimalCount === 2) return true;
  }

  return false;
}

// Splits the string based on the operator but keeps parentheses grouped
function split(expression, operator) {
  let split = [];

  let strSlice = "";

  let bracketCount = 0;
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (char === "(") bracketCount++;
    if (char === ")") bracketCount--;

    if (char === operator && bracketCount === 0 && strSlice.length) {
      // Deals with negative numbers instead of splitting the string
      let lastChar = strSlice.substr(-1);
      if ( operator === "-" && (lastChar === "*" || lastChar === "/" || lastChar === "+") ) {
        strSlice += char;
      } else {
        split.push(strSlice);
        strSlice = "";
      }
    } else {
      strSlice += char;
    }
  }

  if (strSlice.length) split.push(strSlice);
  return split;
}

function parseAddition(string) {
  let addNums = split(string, "+");

  addNums = addNums.map((exp) => {
    // Check if the expression is a number or needs to be parsed further
    if (+exp) {
      return +exp;
    } else {
      return parseSubtraction(exp);
    }
  });

  return addNums.reduce((a, b) => a + b);
}

function parseSubtraction(string) {
  let subtractNums = split(string, "-");

  subtractNums = subtractNums.map((exp) => {
    if (+exp) {
      return +exp;
    } else {
      return parseMultiplication(exp);
    }
  });

  return subtractNums.reduce((a, b) => a - b);
}

function parseMultiplication(string) {
  let multiplyNums = split(string, "*");

  multiplyNums = multiplyNums.map((exp) => {
    if (+exp) {
      return +exp;
    } else {
      return parseDivision(exp);
    }
  });

  return multiplyNums.reduce((a, b) => a * b);
}

function parseDivision(string) {
  let divideNums = split(string, "/");

  divideNums = divideNums.map((exp) => {
    if (+exp) {
      return +exp;
    } else {
      return parseParentheses(exp);
    }
  });

  return divideNums.reduce((a, b) => a / b);
}

// Removes the first opening and closing parenthesis while checking for negative values
function parseParentheses(string) {
  let negative = false;
  let exp = string.split("");

  if (exp[0] === "-") {
    negative = true;
    exp.splice(0, 1);
  }
  if (exp[0] === "(") {
    exp.splice(0, 1);
  }
  if (exp[exp.length - 1] === ")") {
    exp.splice(-1);
  }

  exp = exp.join("");

  return negative ? Number("-" + parseAddition(exp)) : parseAddition(exp);
}

// Removes repeating numbers up to 2 decimal places after 3 repeating nums
function formatResult(num) {
  num = num.toString();

  let start = num.indexOf(".");
  if (start === -1) return +num;

  let repeatNum = num[start];
  let count = 0;

  for (let i = start; i < num.length; i++) {
    if (num[i] === repeatNum) {
      count++;
      if (count === 3) {
        return +num.slice(0, start + 2);
      }
    } else {
      start = i;
      repeatNum = num[i];
      count = 1;
    }
  }
  return +num;
}

module.exports = { calculate };
