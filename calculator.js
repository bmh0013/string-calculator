// Accepts a string and returns the calculated value
function calculate(string) {
  if ( hasInputErrors(string) ) {
    throw new Error("String contains characters that are not parseable");
  }
  if ( hasSyntaxErrors(string) ) {
    throw SyntaxError('Invalid input');
  }

  result = parseAddition(string);


  return result;
}

function hasSyntaxErrors(string) {

}

// Checks to see if any characters in the string contain letters
function hasInputErrors(string) {
  return !!string.match(/[a-z]/i);
}

// Splits the string into groups based on the operator or if inside parentheses
function split(expression, operator) {
  let split = [];

  let strSlice = '';

  let bracketCount = 0;
  for (const char of expression) {
    if (char === ' ') {
      continue;
    } else if ( char === '(' ) {
      strSlice += char;
      bracketCount++;
    } else if ( char === ')' ) {
      strSlice += char;
      bracketCount--;
    } else if ( char === operator && bracketCount === 0 && strSlice.length ) {
      split.push( strSlice );
      strSlice = '';
    } else {
      strSlice += char;
    }
  }

  if (strSlice.length) {
    split.push( strSlice );
  }

  return split;
}

function parseAddition(string) {
  let addArray = split(string, '+');

  addArray = addArray.map(exp => {
    if ( +exp ) {
      return exp;
    } else {
      return parseSubtraction(exp);
    }
  })

  return addArray.reduce( (a,b) => +a + +b);
}

function parseSubtraction(string) {
  let subArray = split(string, '-');
  subArray = subArray.map(exp => {
    if ( +exp ) {
      return exp;
    } else {
      return parseMultiplication(exp);
    }
  })
  return subArray.reduce( (a,b) => +a - +b);
}

function parseMultiplication(string) {
  let multArray = split(string, '*');
  multArray = multArray.map(exp => {
    if ( +exp ) {
      return exp;
    } else {
      return parseDivision(exp);
    }
  })
  return multArray.reduce( (a,b) => +a * +b);
}

function parseDivision(string) {
  let divArray = split(string, '/');
  divArray = divArray.map(exp => {
    if ( +exp ) {
      return exp;
    } else {
      return parseAddition(exp.slice(1, exp.length - 1));
    }
  })
  return divArray.reduce( (a,b) => +a / +b);
}

console.log( calculate("(4-2)*3.5") );

module.exports = { calculate };
